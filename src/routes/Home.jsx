import Hero from "components/Hero.jsx";
import { useState, useContext } from "react";
import { useAppContext } from "@/contexts/secondContext.jsx";
export default function Home() {
  const { user, setUser } = useAppContext();
  return (
    <div className="w-full flex flex-col items-center justify-center bg-blue-500">
      <Hero />
      Hi, dear user: {user.name}
      <p>Name: {user.name}</p>
      <button
        className="bg-white text-black px-4 py-2 rounded-md"
        onClick={() =>
          setUser((prev) => ({
            ...prev,
            name: prev.name === "John" ? "Hoge" : "John",
          }))
        }
      >
        Change Name
      </button>
      {/* <p className="text-white text-2xl font-bold">{value.hello}</p> */}
    </div>
  );
}
