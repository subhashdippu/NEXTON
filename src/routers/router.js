import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main";
import Home from "../pages/home";
import Slider from "../pages/sidebar";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/radha",
    element: <Slider />,
  },
]);
export default router;
