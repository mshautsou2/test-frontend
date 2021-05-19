import { fetcher } from '../../configure'

export type RemoveCouponRequest = void// REMOVES  A PREVIOUSLY-APPLIED COUPON, AS ORDER OF COUPONS MATTERS

export type RemoveCouponResponse = {
    success: boolean
}

export type RemoveCouponEndpoint = (
    request: RemoveCouponRequest
) => Promise<RemoveCouponResponse>

export const removeCoupon: RemoveCouponEndpoint = async (
    request
) => {
    return await fetcher('delete', '/cart/coupons', request)
}
