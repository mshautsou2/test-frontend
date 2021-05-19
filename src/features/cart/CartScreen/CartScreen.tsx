import { useAsyncEffect } from "@/features/shared/useAsyncEffect";
import { addCartItem } from "@api/functions/cart/add-cart-item";
import { CartItem } from "@api/functions/cart/dto/cart-item.dto";
import { getCartTotals } from "@api/functions/cart/get-cart-totals";
import { removeCartItem } from "@api/functions/cart/remove-cart-item";
import { createBraintreeClientToken } from "@api/functions/payment/create-braintree-client-token";
import { useState } from "react";

export const CartScreen = (props: any) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<string | number>('?')
  const [braintreeToken, setBrainTreeToken] = useState("-")

  const [sku, setSku] = useState("")
  const [itemAddedStatus, setItemAddedStatus] =useState("")


  const fetchCartTotals = async () => {
    const result = await getCartTotals();
    setItems(result.items);
    setTotal(result.total)
  }
  const { hasErrors, loading } = useAsyncEffect(async () => {
    fetchCartTotals()
  }, []);

  if (!localStorage.getItem('token')) {
    return <div>NOT AUTHORIZED!</div>
  }
  if (loading) {
    return <div>LOADING...</div>;
  }
  if (hasErrors) {
    return <div>SOME ERROR HAS OCCURED...</div>;
  }
  return (
    <div>
      <label>SKU: </label>
      <input value={sku} onChange={(e) => setSku(e.target.value)} ></input>
      <button
            onClick={async () => {
              try {
                await addCartItem({
                  guideSku: sku,
                })
                setSku("")
                setItemAddedStatus("SUCCESS")
              } catch (e) {
                setItemAddedStatus('ERROR')
              }
              await fetchCartTotals()
            }}
          >
            Add item
          </button>
      <label>{itemAddedStatus}</label>
      <table style={{ padding: '5px'}}>
        {items.map((item) => (
          <tr>
            <td>{item.guideId}</td>
            <td>
            <button onClick={async () => {
              await removeCartItem({
                itemUid: item.itemUid
              })
              await fetchCartTotals()
            }}>REMOVE</button>

            </td>
          </tr>
        ))}
      </table>
      <div>TOTALS: $ {total}</div>
      <button onClick={async () => {
        const { token } = await createBraintreeClientToken()
        setBrainTreeToken(token)
        copyToClipBoard(token)
        setBrainTreeToken('COPIED TO CLIPBOARD!')
        setTimeout(() => {
          setBrainTreeToken('-')
        }, 2000)
      }}>Create Braintree token</button>
      <div>{braintreeToken}</div>
    </div>
  );
};

function copyToClipBoard(str: string) {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};
