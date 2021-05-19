import { fetcher } from '../../configure'

export type CreateBraintreeClientTokenRequest = void

export type CreateBraintreeClientTokenResponse = {
    token: string
}

export type CreateBraintreeClientTokenEndpoint = (
    request: CreateBraintreeClientTokenRequest
) => Promise<CreateBraintreeClientTokenResponse>

export const createBraintreeClientToken: CreateBraintreeClientTokenEndpoint = async (
    request
) => {
    return await fetcher('get', '/payment/token', request)
}
