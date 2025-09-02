import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import f from "../images/f.png";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";
import type { Product } from "../type/product";

const ProductDetails = () => {
  const navigate = useNavigate();
  const id = window.location.pathname.split("/details/")[1];

  const [product, setProduct] = useState<Product | null>(null);
  const { cart, addToCart } = useCart();

  useEffect(() => {
    if (!id) return;
    setProduct(null);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch(console.error);
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-600 text-lg animate-pulse">Loading product...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 p-6">
      <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow overflow-hidden max-w-6xl w-full">
        <div className="flex justify-center items-center p-10 bg-gray-50 w-full md:w-1/2 border-b md:border-b-0 md:border-r border-gray-100">
          <img
            src={product.image}
            alt={product.title}
            className="w-80 h-80 object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="p-10 flex flex-col justify-center w-full md:w-1/2">
          <h1 className="text-3xl font-extrabold text-gray-900 leading-snug">
            {product.title}
          </h1>

          <h2 className="text-2xl text-blue-600 font-bold mt-4">
            ${product.price.toFixed(2)}
          </h2>

          <div className="flex items-center gap-4 mt-4">
            <span className="capitalize text-sm font-semibold text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
              {product.category}
            </span>
            <img src={f} className="w-10 h-10 opacity-70" alt="icon" />
          </div>

          <p className="text-gray-700 mt-6 leading-relaxed text-sm">
            {product.description}
          </p>

          <div className="flex items-center gap-3 mt-6">
            <span className="text-yellow-500 text-lg">⭐</span>
            <span className="text-gray-800 font-semibold">
              {product.rating?.rate}
            </span>
            <span className="text-gray-500 text-sm">
              ({product.rating?.count} reviews)
            </span>
          </div>

          <div className="flex gap-4 mt-8">
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-transform hover:scale-105 cursor-pointer"
              onClick={() => {
                const exists = cart.some((item) => item.product.id === product.id);
                if (exists) {
                  toast.info("Item already in cart!");
                } else {
                  addToCart(product);
                  toast.success("Added to Cart!");
                }
              }}
            >
              🛒 Add to Cart
            </button>

            <button
              className="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-transform hover:scale-105"
              onClick={() => navigate({ to: "/" })}
            >
              ⬅ Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
