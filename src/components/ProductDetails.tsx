

import { useParams, useNavigate } from "@tanstack/react-router"
import { useEffect, useState } from "react"
import f from "../images/f.png"
import { useCart } from "../context/CartContext"
import { toast } from "react-toastify"

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

const ProductDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null)
  const { addToCart } = useCart()

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`)
      const data = await res.json()
      setProduct(data)
    }
    fetchProduct()
  }, [id])


  if (!product) return <p className="text-center mt-10 text-lg">Loading...</p>

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 p-6 ">
      <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full mb-20">
        
        <div className="flex justify-center items-center p-8 bg-gray-50 w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-80 h-80 object-contain drop-shadow-md transition-transform hover:scale-105"
          />
        </div>

        <div className="p-8 flex flex-col justify-center w-full md:w-1/2">
          <h1 className="text-3xl font-extrabold text-gray-900 leading-snug">
            {product.title}
          </h1>
          <h2 className="text-2xl text-green-600 font-bold mt-3">
            ${product.price}
          </h2>

          <div className="flex items-center gap-3 mt-3 text-sm text-black font-bold">
            <span className="capitalize">{product.category}</span>
            <img src={f} className="w-10 h-10 opacity-70" alt="icon" />
          </div>

          <p className="text-gray-700 mt-5 leading-relaxed line-clamp-5">
            {product.description}
          </p>

          <div className="flex items-center gap-3 mt-5">
            <span className=" text-gray-900 px-4 py-1 rounded-full text-sm font-semibold shadow">
              ⭐ {product.rating?.rate}
            </span>
            <span className="text-gray-500 text-sm">
              ({product.rating?.count} reviews)
            </span>
          </div>

          <div className="flex gap-4 mt-8">
            <button
              className="bg-green-700 hover:bg-yellow-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition-transform hover:scale-105 cursor-pointer"
              onClick={() => {
                addToCart(product)
                toast.success("✅ Added to Cart!")
              }}
            >
              🛒 Add to Cart
            </button>

            <button
              className=" cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-xl shadow transition-transform hover:scale-105"
              onClick={() => navigate({ to: "/" })}
            >
              ⬅ Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails

