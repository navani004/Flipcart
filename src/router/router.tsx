// import { createRouter, createRoute, createRootRoute} from "@tanstack/react-router";

// import Signin from "../components/Signin";
// import ProductDetails from "../components/ProductDetails";
// import Cart from "../components/Cart";
// import layout from "../layout";
// import Home from "../components/Home";
// import { useState } from "react";

// const rootRoute = createRootRoute({
//   component: layout,
//   context: () => {
//     const [search, setSearch] = useState("");
//     const [menu, setMenu] = useState("");
//     return { search, setSearch, menu, setMenu };
//   },
// });


// const homeRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "/", // Home page
//   component: Home
// });

// const signinRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "/signin",
//   component: Signin,
// });


// const detailsRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "/details/$id",
//   component: ProductDetails,
// });

// const cartRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "/cart",
//   component: Cart,
// });
// export const router = createRouter({
//   routeTree: rootRoute.addChildren([ homeRoute,signinRoute, detailsRoute,cartRoute]),
// });


// declare module "@tanstack/react-router" {
//   interface Register {
//     router: typeof router;
//   }
// }



// import { createRouter, createRoute, createRootRoute } from "@tanstack/react-router";

// import Layout from "../layout";
// import Home from "../components/Home";
// import Signin from "../components/Signin";
// import ProductDetails from "../components/ProductDetails";
// import Cart from "../components/Cart";
// import { useState } from "react";

// export interface RootContext {
//   search: string;
//   setSearch: (value: string) => void;
//   menu: string;
//   setMenu: (value: string) => void;
// }

// const rootRoute = createRootRoute<RootContext>({
//   component: Layout,
//   context: () => {
//     const [search, setSearch] = useState("");
//     const [menu, setMenu] = useState("");
//     return { search, setSearch, menu, setMenu };
//   },
// });

// const homeRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "/",
//   component: Home,
// });

// const signinRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "/signin",
//   component: Signin,
// });

// const detailsRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "/details/$id",
//   component: ProductDetails,
// });

// const cartRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "/cart",
//   component: Cart,
// });

// export const router = createRouter({
//   routeTree: rootRoute.addChildren([homeRoute, signinRoute, detailsRoute, cartRoute]),
// });

// declare module "@tanstack/react-router" {
//   interface Register {
//     router: typeof router;
//   }
// }


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
  component: Home,
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
