import { useCounter } from "@/stores/counter";
import { useAppContext } from "@/contexts/secondContext";
import React, { Suspense } from "react";
export default function Stores() {
  const counter = useCounter((state) => state.counter);
  const increment = useCounter((state) => state.increment);
  const decrement = useCounter((state) => state.decrement);
  const { user, setUser } = useAppContext();
  const LazyComponents = React.lazy(() =>
    import("@/components/LazyComponents")
  );
  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button
        onClick={() => setUser({ ...user, age: user.age + 1 })}
        className="bg-white text-black px-4 py-2 rounded-md"
      >
        Increment Age
      </button>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponents />
      </Suspense>
    </div>
  );
}
