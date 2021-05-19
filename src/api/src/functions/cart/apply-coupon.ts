import { fetcher } from '../../configure'

export type ApplyCouponRequest = {
    couponCode: string
}

export type ApplyCouponResponse = {
    success: boolean
}

export type ApplyCouponEndpoint = (
    request: ApplyCouponRequest
) => Promise<ApplyCouponResponse>

export const applyCoupon: ApplyCouponEndpoint = async (
    request
) => {
    return await fetcher('post', '/cart/coupons', request)
}
