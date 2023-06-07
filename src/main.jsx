import ReactDOM from "react-dom/client";

import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/app/store.js";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>,
);
