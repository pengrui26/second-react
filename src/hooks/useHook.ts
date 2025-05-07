import { useState } from "react";

export default function useHook() {
  const [name, setName] = useState("John");
  const claculate = (price: number, tax: number) => {
    return price * tax;
  };
  return { name, setName, claculate };
}
