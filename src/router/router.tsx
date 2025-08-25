import { createRouter, createRoute, createRootRoute, Outlet } from "@tanstack/react-router";
import Main from "../components/Main";
import Signin from "../components/Signin";
import ProductDetails from "../components/ProductDetails";

const rootRoute = createRootRoute({
  component: () => (
    <div>
      <Outlet /> 
    </div>
  ),
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

//session s =>
//const token ? user buttin click : alert
const detailsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/details/$id",
  component: ProductDetails,
});


export const router = createRouter({
  routeTree: rootRoute.addChildren([indexRoute, signinRoute, detailsRoute]),
});


declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}


