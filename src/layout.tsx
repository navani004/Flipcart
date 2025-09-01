import { Outlet, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import Navbar from "./components/Navbar";
import MenuBar from "./components/MenuBar";



const Layout = () => {
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState("");

  const routerState = useRouterState();
  const path = routerState.location.pathname;

  const hideNavbar = path.startsWith("/signin");

  const hideMenuBar =
    path.startsWith("/signin") ||
    path.startsWith("/cart") ||
    path.startsWith("/details");
  return (
    <>
      {!hideNavbar && (
        <Navbar search={search} setSearch={setSearch} setMenu={setMenu} />
      )}
       {!hideMenuBar && <MenuBar menu={menu} setMenu={setMenu} />}


      <Outlet />
    </>
  );
};

export default Layout;
