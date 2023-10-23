import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./layout/Root";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import Coffees from "./pages/Coffees/Coffees";
import AddCoffee from "./pages/AddCoffee/AddCoffee";
import UpdateCoffee from "./pages/UpdateCoffee/UpdateCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "coffees",
        element: <Coffees />,
      },
      {
        path: "addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "updateCoffee",
        element: <UpdateCoffee />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
