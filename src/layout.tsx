import { Outlet } from "@tanstack/react-router";
import { useState } from "react";
import Navbar from "./components/Navbar";
import MenuBar from "./components/MenuBar";
import Welcome from "./components/Welcome";
import Home from "./components/Home";

const Layout = () => {
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState("");

  return (
    <>
      <Navbar search={search} setSearch={setSearch} setMenu={setMenu} />
      <MenuBar menu={menu} setMenu={setMenu} />
      <Welcome />
      <Home search={search} menu={menu} />
      <Outlet />
    </>
  );
};

export default Layout;
