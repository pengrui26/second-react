import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ul>
      <li>apple</li>
      <li>banana</li>
      <li>cherry</li>
    </ul>
  </StrictMode>
);
