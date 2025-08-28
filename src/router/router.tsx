import { createRouter, createRoute, createRootRoute} from "@tanstack/react-router";
import Main from "../components/Main";
import Signin from "../components/Signin";
import ProductDetails from "../components/ProductDetails";
import Cart from "../components/Cart";
import layout from "../layout";

const rootRoute = createRootRoute({
  component: layout,
  context: () => ({
    search: "",
    menu: "",
  }),
  
});


const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Main,
});

const signinRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/signin",
  component: Signin,
});


const detailsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/details/$id",
  component: ProductDetails,
});

const cartRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cart",
  component: Cart,
});
export const router = createRouter({
  routeTree: rootRoute.addChildren([indexRoute, signinRoute, detailsRoute,cartRoute]),
});


declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

