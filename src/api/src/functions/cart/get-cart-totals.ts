import { fetcher } from '../../configure'
import { CartDto } from './dto/cart.dto'

export type GetCartTotalsRequest = void

export type GetCartTotalsResponse = CartDto

export type GetCartTotalsEndpoint = (
    request: GetCartTotalsRequest
) => Promise<GetCartTotalsResponse>

export const getCartTotals: GetCartTotalsEndpoint = async () => {
    return await fetcher('get', '/cart/')
}
