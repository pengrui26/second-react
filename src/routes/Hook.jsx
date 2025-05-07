import useHook from "@/hooks/useHook";

const HookButton = () => {
  const { name, setName, claculate } = useHook();
  return (
    <div>
      <button onClick={() => setName(name === "John" ? "Hoge" : "John")}>
        Change Name
      </button>
      <p>2. The name is {name}</p>
      <p>3. The price is ${claculate(100, 1.1)}</p>
    </div>
  );
};

export default function Hook() {
  const { name, setName } = useHook();
  return (
    <div className="w-96 py-4 px-2 border-2 border-blue-500 rounded-md shadow-md bg-white text-black flex flex-col items-center justify-center">
      <p>1. The name is {name}</p>
      <HookButton />
    </div>
  );
}
