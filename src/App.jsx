import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Costom from "./components/Costom";
import Menu from "./components/Menu";
export const MyCOm = () => {
  return <p>Hello {Math.random()}</p>;
};

export const Cost = () => {
  return <p className="text-red-500">Cost here</p>;
};

function App() {
  // const random = Math.random();
  // const loops = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // const isActive = false;

  // return (
  //   <div className="grid grid-cols-2 gap-2">
  //     <div className={`p-3 border rounded shadow-md`}>Card1</div>
  //     <div className={`p-3 border rounded shadow-md`}>Card2</div>
  //   </div>
  // );

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const messages = [
    { id: 1, text: "Hello, how are you?" },
    { id: 2, text: "I'm fine, thank you!" },
    { id: 3, text: "What's your name?" },
  ];
  function sayHello() {
    switch (isLoggedIn) {
      case true:
        return "Welcome to the app";
      case false:
        return "Please log in";
    }
  }
  return (
    <div>
      <p>{sayHello()}</p>
      <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        className="bg-blue-500 text-white p-2 rounded shadow-md"
      >
        {isLoggedIn ? "logout" : "login"}
      </button>
      <ul className="grid gap-2">
        {messages.map(
          (message) =>
            (message.text.startsWith("H") || message.text.startsWith("W")) && (
              <li key={message.id} className="p-2 border rounded shadow-md">
                {message.text}
              </li>
            )
        )}
      </ul>
    </div>
  );
}

export default App;
