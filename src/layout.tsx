
import { Outlet, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import Navbar from "./components/Navbar";
import MenuBar from "./components/MenuBar";
import Home from "./components/Home";

const Layout = () => {
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState("");

  const routerState = useRouterState();
  const path = routerState.location.pathname;

  // Hide Navbar only on signin
  const hideNavbar = path.startsWith("/signin"); // ✅ keep navbar visible on success

  // Hide MenuBar on signin, cart, details, success
  const hideMenuBar =
    path.startsWith("/signin") ||
    path.startsWith("/cart") ||
    path.startsWith("/details") ||
    path.startsWith("/success"); // ✅ menu hidden on success

  return (
    <>
      {!hideNavbar && (
        <Navbar search={search} setSearch={setSearch} setMenu={setMenu} />
      )}
      {!hideMenuBar && <MenuBar menu={menu} setMenu={setMenu} />}

      {path === "/" ? (
        <Home search={search} menu={menu} />
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default Layout;
