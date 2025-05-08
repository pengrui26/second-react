import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function DarkMode() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      if (dark) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="bg-gray-500 text-white px-4 py-1 rounded-md ml-4 dark:bg-white dark:text-black"
    >
      {dark ? <Sun /> : <Moon />}
    </button>
  );
}
