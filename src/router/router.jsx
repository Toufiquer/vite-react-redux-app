import { createBrowserRouter } from "react-router-dom";

import Home from "../page/Home/Home";
import LayOut from "../layOut/LayOut";
import Blog from "../page/Blog/Blog";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut element={<Home />} />,
  },
  {
    path: "/blog",
    element: <LayOut element={<Blog />} />,
  },
]);
