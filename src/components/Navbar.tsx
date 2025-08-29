
// import lens from "../images/lens.png"
// import seller from "../images/seller.png"
// import userIcon from "../images/user (1).png"
// import cartIcon from "../images/cart.png"
// import { Link, useNavigate } from "@tanstack/react-router"
// import { useCart } from "../context/CartContext"
// import { useEffect, useState } from "react"

// interface searchProp {
//   search: string
//   setSearch: (value: string) => void

// }

// const Navbar = (props: searchProp) => {
//   const { cart } = useCart()
//   const navigate = useNavigate()
//   const [signedIn, setSignedIn] = useState(false)

//   useEffect(() => {
//     // Load from localStorage when navbar mounts
//     setSignedIn(localStorage.getItem("signedIn") === "true")

//     // Listen for auth changes
//     const handler = () => {
//       setSignedIn(localStorage.getItem("signedIn") === "true")
//     }
//     window.addEventListener("authChange", handler)

//     return () => window.removeEventListener("authChange", handler)
//   }, [])

//   const handleLogout = () => {
//     localStorage.removeItem("signedIn")
//     window.dispatchEvent(new Event("authChange"))
//     navigate({ to: "/signin" })
//   }

//   return (
//     <div className="flex justify-between items-center px-6 py-3 bg-white shadow-md">
//       <Link to="/">
//         <h1 className="text-2xl font-bold text-blue-600">Flipkart</h1>
//       </Link>

//       <div className="flex items-center border rounded-md px-2 w-96">
//         <input
//           type="text"
//           placeholder="Search for products"
//           className="flex-1 outline-none px-2 py-1"
//           value={props.search}
//           onChange={(e) => props.setSearch(e.target.value)}
         
//         />
//         <img src={lens} className="w-5 h-5" />
//       </div>

//       <div className="flex items-center space-x-10">
//         <div className="flex items-center cursor-pointer">
//           <img src={seller} className="w-6 h-6" />
//           <h1 className="ml-2">Become a Seller</h1>
//         </div>

//         {!signedIn ? (
//           <Link to="/signin">
//             <div className="flex items-center cursor-pointer">
//               <img src={userIcon} className="w-6 h-6" />
//               <h1 className="ml-2">Sign In</h1>
//             </div>
//           </Link>
//         ) : (
//           <div
//             className="flex items-center cursor-pointer"
//             onClick={handleLogout}
//           >
//             <img src={userIcon} className="w-6 h-6" />
//             <h1 className="ml-2">Logout</h1>
//           </div>
//         )}

//         <Link to="/cart">
//           <div className="flex items-center cursor-pointer">
//             <div className="relative">
//               <img src={cartIcon} className="w-6 h-6" />
//               {cart.length > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
//                   {cart.length}
//                 </span>
//               )}
//             </div>
//             <h1 className="ml-2">Cart</h1>
//           </div>
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default Navbar

// import lens from "../images/lens.png"
// import seller from "../images/seller.png"
// import userIcon from "../images/user (1).png"
// import cartIcon from "../images/cart.png"
// import { Link, useNavigate } from "@tanstack/react-router"
// import { useCart } from "../context/CartContext"
// import { useEffect, useState } from "react"

// interface NavbarProps {
//   search: string
//   setSearch: (value: string) => void
//   setMenu?: (value: string) => void // optional if you have category filter
// }

// const Navbar = (props: NavbarProps) => {
//   const { cart } = useCart()
//   const navigate = useNavigate()
//   const [signedIn, setSignedIn] = useState(false)

//   useEffect(() => {
//     setSignedIn(localStorage.getItem("signedIn") === "true")

//     const handler = () => {
//       setSignedIn(localStorage.getItem("signedIn") === "true")
//     }
//     window.addEventListener("authChange", handler)
//     return () => window.removeEventListener("authChange", handler)
//   }, [])

//   const handleLogout = () => {
//     localStorage.removeItem("signedIn")
//     window.dispatchEvent(new Event("authChange"))
//     navigate({ to: "/signin" })
//   }

//   // ✅ Flipkart click handler
//   const handleFlipkartClick = () => {
//     props.setSearch("")          // reset search
//     if (props.setMenu) props.setMenu("") // reset category filter if exists
//     navigate({ to: "/" })        // go to Home
//   }

//   return (
//     <div className="flex justify-between items-center px-6 py-3 bg-white shadow-md">
//       {/* Flipkart Logo / Home */}
//       <h1
//         className="text-2xl font-bold text-blue-600 cursor-pointer"
//         onClick={handleFlipkartClick}
//       >
//         Flipkart
//       </h1>

//       {/* Search bar */}
//       <div className="flex items-center border rounded-md px-2 w-96">
//         <input
//           type="text"
//           placeholder="Search for products"
//           className="flex-1 outline-none px-2 py-1"
//           value={props.search}
//           onChange={(e) => props.setSearch(e.target.value)}
//         />
//         <img src={lens} className="w-5 h-5" />
//       </div>

//       {/* Right-side menu */}
//       <div className="flex items-center space-x-10">
//         <div className="flex items-center cursor-pointer">
//           <img src={seller} className="w-6 h-6" />
//           <h1 className="ml-2">Become a Seller</h1>
//         </div>

//         {!signedIn ? (
//           <Link to="/signin">
//             <div className="flex items-center cursor-pointer">
//               <img src={userIcon} className="w-6 h-6" />
//               <h1 className="ml-2">Sign In</h1>
//             </div>
//           </Link>
//         ) : (
//           <div
//             className="flex items-center cursor-pointer"
//             onClick={handleLogout}
//           >
//             <img src={userIcon} className="w-6 h-6" />
//             <h1 className="ml-2">Logout</h1>
//           </div>
//         )}

//         <Link to="/cart">
//           <div className="flex items-center cursor-pointer">
//             <div className="relative">
//               <img src={cartIcon} className="w-6 h-6" />
//               {cart.length > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
//                   {cart.length}
//                 </span>
//               )}
//             </div>
//             <h1 className="ml-2">Cart</h1>
//           </div>
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default Navbar

// import lens from "../images/lens.png"
// import seller from "../images/seller.png"
// import userIcon from "../images/user (1).png"
// import cartIcon from "../images/cart.png"
// import { Link, useNavigate } from "@tanstack/react-router"
// import { useCart } from "../context/CartContext"
// import { useEffect, useState } from "react"

// interface NavbarProps {
//   search: string
//   setSearch: (value: string) => void
//   setMenu?: (value: string) => void // optional for category filter
// }

// const Navbar = (props: NavbarProps) => {
//   const { cart } = useCart()
//   const navigate = useNavigate()
//   const [signedIn, setSignedIn] = useState(false)

//   useEffect(() => {
//     setSignedIn(localStorage.getItem("signedIn") === "true")

//     const handler = () => {
//       setSignedIn(localStorage.getItem("signedIn") === "true")
//     }
//     window.addEventListener("authChange", handler)
//     return () => window.removeEventListener("authChange", handler)
//   }, [])

//   const handleLogout = () => {
//     localStorage.removeItem("signedIn")
//     window.dispatchEvent(new Event("authChange"))
//     navigate({ to: "/signin" })
//   }

//   const handleFlipkartClick = () => {
//     props.setSearch("")          
//     if (props.setMenu) props.setMenu("")
//     navigate({ to: "/" })        
//   }

//   return (
//     <div className="flex justify-between items-center px-6 py-3 bg-white shadow-md">
      
//       {/* Flipkart Logo */}
//       <h1
//         className="text-2xl font-bold text-blue-600 cursor-pointer"
//         onClick={handleFlipkartClick}
//       >
//         Flipkart
//       </h1>

//       {/* Search bar */}
//       <div className="flex items-center border rounded-md px-2 w-96">
//         <input
//           type="text"
//           placeholder="Search for products"
//           className="flex-1 outline-none px-2 py-1"
//           value={props.search}
//           onChange={(e) => props.setSearch(e.target.value)}
//         />
//         <img src={lens} className="w-5 h-5" />
//       </div>

//       {/* Right menu */}
//       <div className="flex items-center space-x-10">
//         <div className="flex items-center cursor-pointer">
//           <img src={seller} className="w-6 h-6" />
//           <h1 className="ml-2">Become a Seller</h1>
//         </div>

//         {!signedIn ? (
//           <Link
//             to="/signin"
//             className="flex items-center cursor-pointer"
//           >
//             <img src={userIcon} className="w-6 h-6" />
//             <h1 className="ml-2">Sign In</h1>
//           </Link>
//         ) : (
//           <div
//             className="flex items-center cursor-pointer"
//             onClick={handleLogout}
//           >
//             <img src={userIcon} className="w-6 h-6" />
//             <h1 className="ml-2">Logout</h1>
//           </div>
//         )}

//         <Link to="/cart" className="flex items-center cursor-pointer">
//           <div className="relative">
//             <img src={cartIcon} className="w-6 h-6" />
//             {cart.length > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
//                 {cart.length}
//               </span>
//             )}
//           </div>
//           <h1 className="ml-2">Cart</h1>
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default Navbar




import lens from "../images/lens.png";
import seller from "../images/seller.png";
import userIcon from "../images/user (1).png";
import cartIcon from "../images/cart.png";
import { Link, useNavigate } from "@tanstack/react-router";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";

interface NavbarProps {
  search: string;
  setSearch: (value: string) => void;
  setMenu?: (value: string) => void;
}

const Navbar = ({ search, setSearch, setMenu }: NavbarProps) => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    setSignedIn(localStorage.getItem("signedIn") === "true");

    const handler = () => setSignedIn(localStorage.getItem("signedIn") === "true");
    window.addEventListener("authChange", handler);
    return () => window.removeEventListener("authChange", handler);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("signedIn");
    window.dispatchEvent(new Event("authChange"));
    navigate({ to: "/signin" });
  };

  const handleFlipkartClick = () => {
    setSearch("");
    setMenu && setMenu("");
    navigate({ to: "/" });
  };

  return (
    <div className="flex justify-between items-center px-6 py-3 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-blue-600 cursor-pointer" onClick={handleFlipkartClick}>
        Flipkart
      </h1>
      <div className="flex items-center border rounded-md px-2 w-96">
        <input
          type="text"
          placeholder="Search for products"
          className="flex-1 outline-none px-2 py-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={lens} className="w-5 h-5" />
      </div>
      <div className="flex items-center space-x-10">
        <div className="flex items-center cursor-pointer">
          <img src={seller} className="w-6 h-6" />
          <h1 className="ml-2">Become a Seller</h1>
        </div>
        {!signedIn ? (
          <Link to="/signin" className="flex items-center cursor-pointer">
            <img src={userIcon} className="w-6 h-6" />
            <h1 className="ml-2">Sign In</h1>
          </Link>
        ) : (
          <div className="flex items-center cursor-pointer" onClick={handleLogout}>
            <img src={userIcon} className="w-6 h-6" />
            <h1 className="ml-2">Logout</h1>
          </div>
        )}
        <Link to="/cart" className="flex items-center cursor-pointer">
          <div className="relative">
            <img src={cartIcon} className="w-6 h-6" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </div>
          <h1 className="ml-2">Cart</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
