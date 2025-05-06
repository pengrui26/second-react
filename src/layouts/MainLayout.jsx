import { Outlet } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import Home from "../routes/Home.jsx";
import "../index.css";
export default function MainLayout() {
  return (
    <div>
      <header className="bg-purple-500">This is Main Layout</header>
      <Outlet />
      <footer>This is Main Layout</footer>
    </div>
  );
}
