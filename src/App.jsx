import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu, { loader as menuLoader } from "./features/menu/Menu.jsx";
import Order, { loader as orderLoader } from "./features/order/Order.jsx";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder.jsx";
import { action as updateOrderAction } from "./features/order/UpdateOrder.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import Home from "./ui/Home.jsx";
import Error from "./ui/Error.jsx";
import Cart from "./features/cart/Cart.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
        errorElement: <Error />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },

      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        action: updateOrderAction,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
