
import { RouterProvider } from "@tanstack/react-router";
import { router } from "../src/router/router";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <CartProvider>
        <RouterProvider router={router} />
        <ToastContainer position="top-right" autoClose={2000} />
      </CartProvider>
    </div>
  );
};

export default App;
