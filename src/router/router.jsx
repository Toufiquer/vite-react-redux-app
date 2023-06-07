import { createBrowserRouter } from "react-router-dom";

import Home from "../page/Home/Home";
import LayOut from "../layOut/LayOut";
import Blogs from "../page/Blogs/Blogs";
import AddBlog from "../page/AddBlog/AddBlog";
import UpdateBlog from "../page/UpdateBlog/UpdateBlog";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut element={<Home />} />,
  },
  {
    path: "/blogs",
    element: <LayOut element={<Blogs />} />,
  },

  {
    path: "/addBlog",
    element: <LayOut element={<AddBlog />} />,
  },

  {
    path: "/updateBlog",
    element: <LayOut element={<UpdateBlog />} />,
  },
]);
