

import { createRouter, createRoute, createRootRoute } from "@tanstack/react-router";
import Layout from "../layout";
import Home from "../components/Home";
import ProductDetails from "../components/ProductDetails";
import Cart from "../components/Cart";
import Signin from "../components/Signin";

const rootRoute = createRootRoute({
  component: Layout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
 component: () => <Home search={""} menu={""} />, 
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

export const router = createRouter({
  routeTree: rootRoute.addChildren([homeRoute, detailsRoute, cartRoute, signinRoute]),
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
