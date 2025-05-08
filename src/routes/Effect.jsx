// import { useState, useEffect } from "react";
// export default function Effect() {
//   const [name, setName] = useState("John");
//   useEffect(() => {
//     console.log(`The name is ${name}`);
//   }, [name]);
//   return (
//     <div className="w-96 py-4 px-2 border-2 border-blue-500 rounded-md shadow-md bg-white text-black flex flex-col items-center justify-center">
//       <p>Effect</p>
//       <p>The name is {name}</p>
//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded-md"
//         onClick={() => setName(name === "John" ? "Hoge" : "John")}
//       >
//         Change Name
//       </button>
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import Ham from "components/Ham";
export default function Effect() {
  const [name, setName] = useState("John");
  const [data, setData] = useState(null);
  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="py-4 px-2 border-2 border-blue-500 rounded-md shadow-md bg-white text-black flex flex-col items-center justify-center">
      <p>Effect</p>
      <Ham />
      <div>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}
      </div>
    </div>
  );
}
