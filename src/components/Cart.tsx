import { useCart } from "../context/CartContext";
import { startCheckout } from "./stripeCheckout";
import { toast } from "react-toastify"

const Cart = () => {
  const { cart, increaseQty, decreaseQty, getTotalPrice } = useCart();
  const handleCheckout = () => {
    const signedIn = localStorage.getItem("signedIn");
    if (!signedIn) {
      toast.error("Please sign in to proceed with payment");
      return;
    }

    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    startCheckout(cart);
  };
  if (cart.length === 0)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 px-6">
        <div className="w-32 h-32 mb-6 flex items-center justify-center bg-gray-200 rounded-full shadow-inner animate-pulse">
          <span className="text-6xl text-gray-400">🛒</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-700 mb-2">Your cart is empty</h1>
        <p className="text-gray-500 text-center mb-6 max-w-xs">
          Looks like you haven’t added any products yet.
        </p>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105"
          onClick={() => (window.location.href = "/")}
        >
          🛍️ Start Shopping
        </button>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
        <div className="flex-1 space-y-4">
          {cart.map((item) => (
            <div
              key={item.product.id}
              className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="bg-gray-100 flex justify-center items-center p-4 md:p-6 w-full md:w-40">
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="w-24 h-24 object-contain"
                />
              </div>
              <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 truncate">
                    {item.product.title}
                  </h2>
                  <p className="text-gray-500 mt-1 text-sm">
                    Price: ₹{item.product.price.toFixed(2)}
                  </p>
                  <p className="text-gray-400 mt-1 text-sm">
                    Subtotal: ₹{(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <button
                    className="bg-red-100 hover:bg-red-200 text-red-600 font-bold w-9 h-9 rounded-full transition"
                    onClick={() => decreaseQty(item.product.id)}
                  >
                    -
                  </button>
                  <span className="px-3 font-medium text-gray-800">{item.quantity}</span>
                  <button
                    className="bg-green-100 hover:bg-green-200 text-green-600 font-bold w-9 h-9 rounded-full transition"
                    onClick={() => increaseQty(item.product.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="md:w-96 bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-gray-900">Order Summary</h2>
          <div className="flex justify-between text-gray-700 font-medium">
            <span>Items ({cart.length})</span>
            <span>₹{getTotalPrice().toFixed(2)}</span>
          </div>
          <div className="border-t border-gray-200"></div>

           <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-transform hover:scale-105"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>

          <button
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-6 py-3 rounded-xl transition"
            onClick={() => (window.location.href = "/")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
