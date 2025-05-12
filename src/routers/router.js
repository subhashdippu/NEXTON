import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main";
// import Home from "../pages/home";
import Slider from "../pages/sidebar";
import ProductDetail from "../pages/productDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        // element: <Home />,
      },
    ],
  },
  {
    path: "/radha",
    element: <Slider />,
  },
  { path: "/product/:id", element: <ProductDetail /> },
]);
export default router;
