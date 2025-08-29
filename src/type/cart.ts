import type{ Product } from "../type/product"

export interface CartItem {
  product: Product
  quantity: number
}

export interface CartContextType {
  cart: CartItem[]
  addToCart: (product: Product) => void
  increaseQty: (id: number) => void
  decreaseQty: (id: number) => void
  getTotalPrice: () => number
}
