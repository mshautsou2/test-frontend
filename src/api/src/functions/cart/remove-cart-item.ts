import { fetcher } from '../../configure'

export type RemoveCartItemRequest = {
    itemUid: string
}

export type RemoveCartItemResponse = {
    success: boolean
}

export type RemoveCartItemEndpoint = (
    request: RemoveCartItemRequest
) => Promise<RemoveCartItemResponse>

export const removeCartItem: RemoveCartItemEndpoint = async (
    request
) => {
    return await fetcher('delete', `/cart/items/${request.itemUid}`, request)
}
