

import { useCart } from "../context/CartContext"

const Cart = () => {
  const { cart, increaseQty, decreaseQty, getTotalPrice } = useCart()

  if (cart.length === 0)
    return (
      <h1 className="text-center text-2xl font-semibold mt-20 text-gray-600">
        Your cart is empty 😔
      </h1>
    )

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Cart</h1>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.product.id}
            className="flex flex-col md:flex-row items-center md:justify-between bg-white p-4 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-5 w-full md:w-2/3">
              <img
                src={item.product.image}
                alt={item.product.title}
                className="w-24 h-24 object-contain rounded-lg bg-gray-50 p-2"
              />
              <div>
                <h2 className="font-semibold text-lg text-gray-900">
                  {item.product.title}
                </h2>
                <p className="text-gray-700 font-medium mt-1">
                  ${item.product.price.toFixed(2)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold w-9 h-9 rounded-full transition-colors"
                onClick={() => decreaseQty(item.product.id)}
              >
                -
              </button>
              <span className="px-3 font-medium text-gray-800">{item.quantity}</span>
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold w-9 h-9 rounded-full transition-colors"
                onClick={() => increaseQty(item.product.id)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-end items-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Total: <span className="text-green-600">${getTotalPrice().toFixed(2)}</span>
        </h2>
      </div>
    </div>
  )
}

export default Cart
