import { CartItem } from './cart-item.dto'

export interface CartDto {
    appliedCoupon?: string
    subtotal: number
    tax: number
    total: number
    totalSavingsWithDiscount: number
    items: CartItem[]
}
