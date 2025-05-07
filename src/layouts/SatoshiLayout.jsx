import { Outlet, Link } from "react-router-dom";
import "@/satoshi.css";
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
      <Outlet />
      <footer>This is Satoshi Layout</footer>
    </div>
  );
}
