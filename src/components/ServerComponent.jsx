import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import instance from "@/api/axios";

function fetchData() {
  return instance.get("/users");
}
export default function ServerComponent() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchData"],
    queryFn: fetchData,
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);
  return (
    <>
      <h1>ServerComponent</h1>
      <ul className="grid grid-cols-4 gap-4">
        {data.data.map((user) => (
          <li
            key={user.id}
            className="border-2 border-gray-300 rounded-md p-4 bg-gray-100 text-black"
          >
            <p>{user.name}</p>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
