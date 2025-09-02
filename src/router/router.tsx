

import { createRouter, createRoute, createRootRoute, Outlet } from "@tanstack/react-router";
import Layout from "../layout";
import ProductDetails from "../components/ProductDetails";
import Cart from "../components/Cart";
import Signin from "../components/Signin";
import Checkout from "../components/Checkout";

const rootRoute = createRootRoute({
  component: Layout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
 component: Outlet, 
});

export const detailsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/details/$id",
  component: ProductDetails,
});

const cartRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cart",
  component: Cart,
});

const signinRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/signin",
  component: Signin,
});

const checkoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/checkout",
  component: Checkout,
});


export const router = createRouter({
  routeTree: rootRoute.addChildren([homeRoute,checkoutRoute, detailsRoute, cartRoute, signinRoute,]),
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
