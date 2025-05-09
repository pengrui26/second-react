import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App, { MyCOm } from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "@/routes/Home.jsx";
import Hero from "@/components/Hero.jsx";
import NotFound from "@/routes/NotFound.jsx";
import MainLayout from "@/layouts/MainLayout.jsx";
import SatoshiLayout from "@/layouts/SatoshiLayout.jsx";
import Secret from "@/routes/Secret.jsx";
import Effect from "@/routes/Effect.jsx";
import Hook from "@/routes/Hook.jsx";
import UserContext from "@/contexts/userContext.jsx";
import { AppWrapper } from "@/contexts/secondContext.jsx";
import Stores from "@/routes/Stores.jsx";
import Search from "@/routes/Search.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <SatoshiLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/secret",
        element: <Secret />,
      },
      {
        path: "/effect",
        element: (
          <div className="flex items-center justify-center">
            <Effect />
          </div>
        ),
      },
      {
        path: "/hook",
        element: (
          <div className="flex items-center justify-center">
            <Hook />
          </div>
        ),
      },
      {
        path: "/stores",
        element: (
          <div className="flex items-center justify-center">
            <Stores />
          </div>
        ),
      },
      {
        path: "/search",
        element: (
          <div className="flex items-center justify-center">
            <Search />
          </div>
        ),
      },
    ],
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
    <AppWrapper>
      <RouterProvider router={router} />
    </AppWrapper>
  </React.StrictMode>
);
