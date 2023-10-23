import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./layout/Root";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import AddCoffee from "./pages/AddCoffee/AddCoffee";
import UpdateCoffee from "./pages/UpdateCoffee/UpdateCoffee";
import CoffeeDetails from "./pages/CoffeeDetails/CoffeeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            "https://the-coffee-connection-server-fltn8secz-developer-sahariar-reza.vercel.app/coffee"
          ),
      },
      {
        path: "addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "updateCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(
            `https://the-coffee-connection-server-fltn8secz-developer-sahariar-reza.vercel.app/coffee/${params.id}`
          ),
      },
      {
        path: "coffeeDetails/:id",
        element: <CoffeeDetails />,
        loader: ({ params }) =>
          fetch(
            `https://the-coffee-connection-server-fltn8secz-developer-sahariar-reza.vercel.app/coffee/${params.id}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
