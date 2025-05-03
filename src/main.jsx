import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App, { MyCOm } from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home.jsx";
import Hero from "./components/Hero.jsx";
import NotFound from "./routes/NotFound.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <Hero />,
  },
  {
    path: "/about/:id",
    element: (
      <Hero>
        <p>This is other</p>
      </Hero>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
