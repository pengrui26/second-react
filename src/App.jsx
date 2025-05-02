import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);
  const list = ["apple", "banana", "cherry"];
  const title = "Hello World";
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "New York",
  };
  const fruits = [
    {
      title: "apple",
      price: 10,
      options: ["red", "green", "blue"],
    },
    {
      title: "banana",
      price: 20,
      options: ["yellow", "green", "red"],
    },
  ];
  const [color, setColor] = useState("blue");
  return (
    <div className="app">
      <Header />
      {fruits.map((item, index) => (
        <li key={index}>
          {item.title}
          {item.price}
          <ul style={{ backgroundColor: "red", color: color }}>
            {item.options.map((option, index) => (
              <span key={index}> {option}</span>
            ))}
          </ul>
          <button onClick={() => setColor(color == "blue" ? "green" : "blue")}>
            Change color
          </button>
        </li>
      ))}
      <Header />
    </div>
  );
}

export default App;
