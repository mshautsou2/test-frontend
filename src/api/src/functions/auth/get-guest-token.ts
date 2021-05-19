import { fetcher } from '../../configure'

export type GetGuestTokenRequest = void

export type GetGuestTokenResponse = {
    success: boolean
    token: string
}

export type GetGuestTokenEndpoint = (
    request: GetGuestTokenRequest
) => Promise<GetGuestTokenResponse>

export const getGuestToken: GetGuestTokenEndpoint = async (
    request
) => {
    return await fetcher('get', '/users/guest-token', request)
}
