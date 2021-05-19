import { fetcher } from '../../configure'

export type SubmitBraintreePaypalOrderRequest = {
    nonceToken: string
}

export type SubmitBraintreePaypalOrderResponse = {
    success: boolean;
    orderId: string;
}

export type SubmitBraintreePaypalOrderEndpoint = (
    request: SubmitBraintreePaypalOrderRequest
) => Promise<SubmitBraintreePaypalOrderResponse>

export const submitBraintreePaypalOrder: SubmitBraintreePaypalOrderEndpoint = async (
    request
) => {
    return await fetcher('post', '/payment/paypal', request)
}
