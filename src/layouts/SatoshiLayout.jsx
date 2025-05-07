import { Outlet, Link } from "react-router-dom";
import "@/satoshi.css";
import Effect from "@/routes/Effect";
import Hook from "@/routes/Hook";
export default function SatoshiLayout() {
  return (
    <div className="satoshi-font">
      <header>This is Satoshi Layout</header>
      <Link
        to="/secret"
        className="bg-white text-black px-4 py-1 rounded-md ml-4"
      >
        Go to secret
      </Link>
      <Link to="/" className="bg-white text-black px-4 py-1 rounded-md ml-4">
        Go to Home
      </Link>
      <Link
        to="/effect"
        className="bg-white text-black px-4 py-1 rounded-md ml-4"
      >
        Go to Effect
      </Link>
      <Link
        to="/hook"
        className="bg-white text-black px-4 py-1 rounded-md ml-4"
      >
        Go to Hook
      </Link>
      <Outlet />
      <footer>This is Satoshi Layout</footer>
    </div>
  );
}
