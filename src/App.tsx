import { RouterProvider } from "@tanstack/react-router";
import { router } from "../src/router/router";

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
