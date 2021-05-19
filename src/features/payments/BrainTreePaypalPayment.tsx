import { useState } from "react"
import { PayPalButton } from "react-paypal-button-v2"
import { useAsyncEffect } from "../shared/useAsyncEffect"
import { createBrainTreeInstance, createBraintreePaypalClient, PAYPAL_CLIENT_ID } from '../../config/braintree'
export const BrainTreePaypalPayment = () => {


    const [paypalCheckoutInstance, setPaypalCheckoutInstance] = useState<any>()
    useAsyncEffect(async () => {
        const braintreeInstance = await createBrainTreeInstance()
        const paypalCheckoutInstance: any = await createBraintreePaypalClient(braintreeInstance)
        setPaypalCheckoutInstance(paypalCheckoutInstance);
    }, [])

    if (!paypalCheckoutInstance) {
        return "LOADING..."
    }
    return (
        <PayPalButton 
            amount="19.44"
            currency="USD"
            createOrder={() => {
                return paypalCheckoutInstance.createPayment({
                    flow: 'checkout', // Required
                    amount: 10.00, // Required
                    currency: 'USD', // Required, must match the currency passed in with loadPayPalSDK
            
                    intent: 'capture', // Must match the intent passed in with loadPayPalSDK
            
                    enableShippingAddress: true,
                    shippingAddressEditable: false,
                    shippingAddressOverride: {
                      recipientName: 'Scruff McGruff',
                      line1: '1234 Main St.',
                      line2: 'Unit 1',
                      city: 'Chicago',
                      countryCode: 'US',
                      postalCode: '60652',
                      state: 'IL',
                      phone: '123.456.7890'
                    }
                })
            }}

            onApprove={(details: any, data: any) => {
                return paypalCheckoutInstance.tokenizePayment(data, (err: any, payload: any) => {
                    if (!err) {
                        console.log(data, payload)
                        console.log(payload.nonce)//send this to the server
                    } else {
                        console.error(err)
                    }
                  });
            }}
            onError={(err: any) => {
                console.error(err)
            }}

            options={{
                clientId: PAYPAL_CLIENT_ID,
                currency: 'USD',
                merchantId: 'w3634hzgk256m7gc',
                intent: 'capture',
                
            }}
            
        />
    )

}