import { fetcher } from '../../configure'

export type TransferCartRequest = {
    guestToken: string
}

export type TransferCartResponse = {
    success: boolean
}

export type TransferCartEndpoint = (
    request: TransferCartRequest
) => Promise<TransferCartResponse>

export const transferCart: TransferCartEndpoint = async (request) => {
    return await fetcher('put', `/cart/`, request)
}
