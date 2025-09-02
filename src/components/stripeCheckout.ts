import { loadStripe } from "@stripe/stripe-js";
import toast from "react-hot-toast";

const stripePromise = loadStripe("pk_test_51S2UqnQrgf7Db4bXG3rCdootSUFHk2eTtgTkeN2T87mTVVO8QRZYfJnp6CuPJv7ApVIgG4oAxXm0y7MybJ7rMUIJ00xkw7XW6d");

export async function startCheckout(cart: any[]) {
  try {
    const res = await fetch("http://localhost:5000/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart }),
    });

    if (!res.ok) {
      toast.error("Failed to create checkout session");
      return;
    }

    const data = await res.json();
    const stripe = await stripePromise;

    if (stripe) {
      await stripe.redirectToCheckout({ sessionId: data.id });
    } else {
      toast.error("Stripe failed to load");
    }
  } catch (error) {
    toast.error("Checkout failed");
    console.error(error);
  }
}
