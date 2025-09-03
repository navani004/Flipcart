import { loadStripe } from "@stripe/stripe-js";
import { toast } from "react-toastify";

const stripePromise = loadStripe("pk_test_51S2UqnQrgf7Db4bXG3rCdootSUFHk2eTtgTkeN2T87mTVVO8QRZYfJnp6CuPJv7ApVIgG4oAxXm0y7MybJ7rMUIJ00xkw7XW6d");

export default function Checkout() {
  const handleCheckout = async () => {
    try {
      const res = await fetch("http://localhost:5000/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const { id } = await res.json();
      const stripe = await stripePromise;

      if (stripe) {
        await stripe.redirectToCheckout({ sessionId: id });
      } else {
        toast.error("Stripe failed to load");
      }
    } catch (error) {
      toast.error("Checkout failed");
      console.error(error);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="w-full mt-5 bg-orange-500 text-white py-3 rounded-lg font-semibold"
    >
      Proceed to Pay
    </button>
  );
}
