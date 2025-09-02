import lens from "../images/lens.png";
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
    <div className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
        <h1
          className="text-3xl font-extrabold text-blue-600 cursor-pointer hover:scale-105 transition-transform"
          onClick={handleFlipkartClick}
        >
          Flipkart
        </h1>

        <div
          className="
            flex
            items-center
            flex-1
            max-w-lg
            mx-6
            px-4
            py-2
            rounded-full
            bg-gray-100
            hover:bg-gray-200
            focus-within:ring-2
            focus-within:ring-blue-400
            shadow-inner
            transition
          "
        >
          <img src={lens} className="w-5 h-5 text-gray-500 mr-2" alt="search" />
          <input
            type="text"
            placeholder="Search for products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              flex-1
              bg-transparent
              outline-none
              text-gray-800
              placeholder-gray-500
            "
          />
        </div>

        <div className="flex items-center gap-x-6">
          {!signedIn ? (
            <Link
              to="/signin"
              className="flex items-center gap-1 px-3 py-1.5 rounded-full hover:bg-gray-100  font-medium   "
            >
              <img src={userIcon} className="w-5 h-5" alt="User" />
              <span>Sign In</span>
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full hover:bg-red-100"
            >
              <img src={userIcon} className="w-5 h-5" alt="User" />
              <span>Logout</span>
            </button>
          )}

          <Link
            to="/cart"
            className="flex items-center relative hover:scale-105 transition-transform"
          >
            <img src={cartIcon} className="w-6 h-6" alt="Cart" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow">
                {cart.length}
              </span>
            )}
            <span className="ml-1 font-medium">Cart</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
