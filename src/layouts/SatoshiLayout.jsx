import { Outlet, Link } from "react-router-dom";
import "@/satoshi.css";
import Effect from "@/routes/Effect";
import Hook from "@/routes/Hook";
import DarkMode from "@/components/DarkMode";
import Ham from "@/components/Ham";
export default function SatoshiLayout() {
  return (
    <>
      <div className="satoshi-font flex items-center ">
        <Link to="/secret" className="link-button">
          Go to secret
        </Link>
        <Link to="/" className="link-button">
          Go to Home
        </Link>
        <Link to="/effect" className="link-button">
          Go to Effect
        </Link>
        <Link to="/hook" className="link-button">
          Go to Hook
        </Link>
        <div className="ml-auto pt-0.5">
          <DarkMode />
        </div>
      </div>
      <Ham />
      <Outlet />
      <footer>This is Satoshi Layout</footer>
    </>
  );
}
