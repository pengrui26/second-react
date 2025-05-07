import Hero from "components/Hero.jsx";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("John");
  return (
    <div className="w-full flex flex-col items-center justify-center bg-blue-500">
      <Hero />
      We are still in Home Hi
      <p>Name: {name}</p>
      <button
        className="bg-white text-black px-4 py-2 rounded-md"
        onClick={() => setName(name === "John" ? "Hoge" : "John")}
      >
        Change Name
      </button>
    </div>
  );
}
