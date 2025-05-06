import { Outlet, Link } from "react-router-dom";
import "@/satoshi.css";
export default function SatoshiLayout() {
  return (
    <div className="satoshi-font">
      <header>This is Satoshi Layout</header>
      <Link to="/secret" className="text-white">
        Go to secret
      </Link>
      <Outlet />
      <footer>This is Satoshi Layout</footer>
    </div>
  );
}
