// https://developers.braintreepayments.com/guides/venmo/configuration

import { submitBraintreeOrder } from "@api/functions/payment/submit-braintree-order"
import { useState } from "react"
import { createBraintreeVenmoInstance, createBrainTreeInstance } from "../../config/braintree"
import { useAsyncEffect } from "../shared/useAsyncEffect"

export const BrainTreeVenmoPayment = () => {

    const [result, setResult] = useState("")
    const [token, setToken] = useState("")
    const [venmoInstance, setVenmoInstance] = useState<any>(undefined)
    useAsyncEffect(async () => {
        await submitBraintreeOrder({
            nonceToken: 'fake-venmo-account-nonce'
        })
        // setResult(JSON.stringify({
        //     test: {
        //         token: 'asdfaddddddddddddddddd ddddddddd ddddddddddsd'
        //     }
        // }))
        const clientInstance = await createBrainTreeInstance()
        const result = await createBraintreeVenmoInstance(clientInstance)
        setVenmoInstance(result)
        console.log(result)
    }, [])


    
    return (
        <>
        <button onClick={() => {
            console.log('pay button clicked')
            venmoInstance.tokenize((tokenizeErr: any, payload: any) => {
                console.log(payload)
                setResult(JSON.stringify(payload))
            })
        }}>
            {venmoInstance ? 'PAY WITH VENMO' : 'LOADING...'}
        </button>
        <div style={{width: '100%'}}>{result}</div>
        </>
    )
}