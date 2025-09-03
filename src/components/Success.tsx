import { Link } from "@tanstack/react-router";
import { CheckCircle } from "lucide-react"; 

export default function Success() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-6">
      <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
      <h1 className="text-3xl font-bold text-green-700 mb-2">Payment Successful!</h1>
      <p className="text-gray-600 mb-6 text-center">
        Thank you for your purchase. Your order has been placed successfully.
      </p>
      <Link
        to="/"
        search={{}} 
        className="bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:bg-green-700 transition-colors"
      >
        Go Back to Home
      </Link>
    </div>
  );
}
