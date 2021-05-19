import { useState } from 'react'
import { createBrainTreeInstance, createHostedFields } from '../../config/braintree'
import { useAsyncEffect } from '../shared/useAsyncEffect'
import { hostedFields } from 'braintree-web'
import { submitBraintreeOrder } from '@api/functions/payment/submit-braintree-order'

export const BrainTreeCardPayment = () => {

    const [hostedFieldsInstance, setHostedFieldsInstance] = useState(undefined)
    useAsyncEffect(async () => {
        const clientInstance = await createBrainTreeInstance()
        const hostFields = await createHostedFields(clientInstance, {
            fields: {
                number: {
                    selector: '#do-not-use-in-prod-card-number'
                },
                cvv: {
                    selector: '#do-not-use-in-prod-cvv'
                },
                expirationDate: {
                    selector: '#do-not-use-in-prod-expiration-date'
                }
            },
            styles: {}
        })
        setHostedFieldsInstance(hostFields as any)
        // console.log(hostFields)
    })


    return (
        <div>
            <label>Card number</label>
            <div id="do-not-use-in-prod-card-number"></div>
            <label>CVV</label>
            <div id="do-not-use-in-prod-cvv"></div>
            <label>Expiration Date</label>
            <div id="do-not-use-in-prod-expiration-date"></div>
            <button onClick={() => {
                console.log('here', hostedFieldsInstance)
                if (hostedFieldsInstance) {
                    (hostedFieldsInstance as any).tokenize(async function (tokenizeErr: any, payload: any) {
                        if (tokenizeErr) {
                          console.error(tokenizeErr);
                          return;
                        }
                
                        // If this was a real integration, this is where you would
                        // send the nonce to your server.
                        console.log('Got a nonce: ' + payload.nonce);
                        console.log('submitting....')
                        // const response = await submitBraintreeOrder({ nonceToken: payload.nonce })
                        // console.log('response from backend', response)
                      });
                }
            }}>{hostedFields ? 'PAY' : 'LOADING...'}</button>
        </div>
    )
}