import { useLocation } from '@tanstack/react-router'
import f from "../images/f.png"

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
  const location = useLocation()
  const product = (location.state as unknown as { prod: Product } | undefined)?.prod

  return (
    <div className='flex p-3'>
      <img
        src={product?.image}
        className='w-96 border border-spacing-1 shadow-2xl p-3'
      />
      <div className='text-black ml-10 mt-20'>
        <h1 className='text-xl text-gray-500'>
          {product?.title.toUpperCase()}
        </h1>
        <h1 className='font-bold text-2xl'>${product?.price}</h1>
        <div className='flex items-center'>
          <h1>{product?.category}</h1>
          <img src={f} className='w-20 h-16' />
        </div>
        <h1>{product?.description}</h1>
        <h1 className='bg-green-500 p-2 w-9 font-semibold text-white mt-3'>
          {product?.rating?.rate}
        </h1>
      </div>
    </div>
  )
}

export default ProductDetails
