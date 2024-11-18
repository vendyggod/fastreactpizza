import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu, { loader as menuLoader } from "../../pages/menu/ui/Menu.jsx";
import Order, { loader as orderLoader } from "../../pages/order/ui/Order.jsx";
import CreateOrder, {
  action as createOrderAction,
} from "../../features/order/create-order/ui/CreateOrder.jsx";
import { action as updateOrderAction } from "../../features/order/update-order/ui/UpdateOrder.jsx";
import AppLayout from "../ui/AppLayout.jsx";
import { HomePage } from "../../pages/home/index.jsx";
import Error from "../../shared/ui/Error.jsx";
import Cart from "../../pages/cart/ui/Cart.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <HomePage /> },
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

export function AppRouter() {
  return <RouterProvider router={router}></RouterProvider>;
}
