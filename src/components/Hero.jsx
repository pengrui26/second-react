import { useParams } from "react-router-dom";

export default function Hero({ children }) {
  const { id } = useParams();

  return (
    <div className="px-4 py-4 items-center justify-center bg-green-500">
      <p> This is Hero</p>
      {children}
      <p>This is id: {id}</p>
    </div>
  );
}
