import { fetcher } from '../../configure'

export type AddCartItemRequest = {
    guideSku: string
}

export type AddCartItemResponse = {
    itemUid: string;
    success: boolean
}

export type AddCartEndpoint = (
    request: AddCartItemRequest
) => Promise<AddCartItemResponse>

export const addCartItem: AddCartEndpoint = async (
    request
): Promise<AddCartItemResponse> => {
    return await fetcher('post', '/cart/items', request)
}
