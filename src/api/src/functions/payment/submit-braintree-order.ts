import { fetcher } from '../../configure'

export type SubmitBraintreeOrderRequest = {
    nonceToken: string
}

export type SubmitBraintreeOrderResponse = {
    success: boolean
    status: 'CART_IS_EMPTY' | 'BRAINTREE_FAULT' | 'INTERNAL_SERVICE_ERROR' | 'PURCHASED'
}

export type SubmitBraintreeOrderEndpoint = (
    request: SubmitBraintreeOrderRequest
) => Promise<SubmitBraintreeOrderResponse>

export const submitBraintreeOrder: SubmitBraintreeOrderEndpoint = async (
    request
) => {
    return await fetcher('post', '/payment/default', request)
}
