import axios from "axios";
import { useState, useEffect } from "react";
export default function Axios() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((user) => (
            <li key={user.id} className="bg-white p-4 rounded-md text-black">
              <p className="text-2xl font-bold">{user.name}</p>
              <p className="text-gray-500">{user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
