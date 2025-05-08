"use client";

import { useState } from "react";
import Hamburger from "hamburger-react";

export default function Ham() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Hamburger size={20} toggled={open} toggle={setOpen} />
      {open && (
        <div className="fixed absolute top-0 left-0 w-screen h-screen bg-white dark:bg-slate-900 dark:text-white">
          <header className="fixed flex items-center justify-end w-full">
            <Hamburger size={20} toggled={open} toggle={setOpen} />
          </header>
          <main className="flex items-center justify-center h-screen">
            <h1>Hello</h1>
          </main>
        </div>
      )}
    </div>
  );
}
