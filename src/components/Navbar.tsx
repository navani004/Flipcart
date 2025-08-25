import lens from "../images/lens.png"
import seller from "../images/seller.png"
import user from "../images/user (1).png"
// import cart from "../images/cart.png"
import out from "../images/out (1).png"
import { Link } from "@tanstack/react-router"

interface searchProp{
    setSearch : any
    setMenu:any
}
const Navbar = (props:searchProp) => {
  return (
    <div className='grid grid-cols-2 p-3'>
      <div onClick={()=>props.setMenu("")} className='flex cursor-pointer'>
        <div className='ml-20'>
          <h1 className='text-blue-700 text-xl font-bold italic'>Flipkart</h1>
          <h4 className='text-gray-500 italic'>Explores</h4>
        </div>
        <div className="bg-blue-50 flex items-center p-2 w-full ml-7 rounded-lg">
          <img src={lens} className='w-5 h-5 ml-2' />
          <input 
          onChange={(e)=>props.setSearch(e.target.value)}
            className=" outline-none bg-blue-50 ml-3 text-gray-900 text-xl rounded-lg block w-full" 
            placeholder="Search for Products,Brands and More" 
            required 
          />
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex ml-11">
          <img src={seller} className="w-6 h-6" />
          <h1 className="ml-2">Become a seller</h1>
        </div>

        <Link to="/signin">
          <div className="flex ml-16 cursor-pointer">
            <img src={user} className="w-6 h-6" />
            <h1 className="ml-2">Sign in</h1>
          </div>
        </Link>
{/* 
        <Link to="/cart">
          <div className="flex ml-16 cursor-pointer">
            <img src={cart} className="w-6 h-6" />
            <h1 className="ml-2">Cart</h1>
          </div>
        </Link> */}

        <div 
          className="flex ml-16 cursor-pointer"
          onClick={() => {
            localStorage.removeItem("token")
            window.location.href = "/Signin"
          }}
        >
          <img src={out} className="w-6 h-6" />
          <h1 className="ml-2">Logout</h1>
        </div>
      </div>
    </div>
  )
}

export default Navbar
