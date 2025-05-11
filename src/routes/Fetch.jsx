import { useState, useEffect } from "react";
export default function Fetch() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);
  //   const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const fetchData = async () => {
    try {
      setLoading(true);
      //   await delay(3000);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const users = await response.json();
      setData(users);
      console.log(users);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      Fetch
      {loading && <p>Loading...</p>}
      {data && (
        <ul className="flex flex-col gap-2">
          {data.map((user) => (
            <li
              className="border-2 border-gray-300 rounded-md p-2"
              key={user.id}
            >
              {user.name}
            </li>
          ))}
        </ul>
      )}
      {error && <p className="text-red-500">Error: {error.message}</p>}
    </div>
  );
}
