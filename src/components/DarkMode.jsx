"use client";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useLocalStorage } from "react-use";

export default function DarkMode() {
  const [dark, setDark] = useState(true);
  const [value, setValue, remove] = useLocalStorage("darkmode", false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      if (dark) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      setValue(dark);
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
