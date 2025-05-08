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
    <UserContext.Provider value={{ name: "John", age: 20 }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  </React.StrictMode>
);
