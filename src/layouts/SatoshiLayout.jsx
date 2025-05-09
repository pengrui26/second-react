import { Outlet, Link } from "react-router-dom";
import "@/satoshi.css";
import Effect from "@/routes/Effect";
import Hook from "@/routes/Hook";
import DarkMode from "@/components/DarkMode";
import Ham from "@/components/Ham";
import Stores from "@/routes/Stores";
import Search from "@/routes/Search";
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
        <Link to="/stores" className="link-button">
          Go to Stores
        </Link>
        <Link to="/search" className="link-button">
          Go to Search
        </Link>
        <div className="ml-auto pt-0.5">
          <DarkMode />
        </div>
      </div>
      <Ham />
      <Outlet />
      <footer className="fixed bottom-0 w-full flex justify-center">
        This is Satoshi Layout
      </footer>
    </>
  );
}
