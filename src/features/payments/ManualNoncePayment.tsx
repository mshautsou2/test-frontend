import { submitBraintreeOrder } from "@api/functions/payment/submit-braintree-order"
import { submitBraintreePaypalOrder } from "@api/functions/payment/submit-braintree-paypal-order"
import { useState } from "react"

export const ManualNoncePayment = () => {
    
    const [nonce, setNonce] = useState('')
    if (!localStorage.getItem('token')) {
        return (
            <div>NOT AUHTORIZED</div>
        )
    }

    return (
        <div>
            <label>Braintree: </label>
            
            <label>Nonce:</label>
            <input value={nonce} onChange={(e) => setNonce(e.target.value)}></input>
            <button onClick={async () => {
                await submitBraintreePaypalOrder({
                    nonceToken: nonce
                }).then(console.log)
            }}>Submit</button>
        </div>
    )
}