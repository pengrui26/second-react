import { useMutation, useQueryClient } from "@tanstack/react-query";
import instance from "@/api/axios";

export default function PostComponent() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (newItem) =>
      instance.post("/posts", newItem, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["fetchData"] });
        },
      }),
  });
  return (
    <div>
      <button
        onClick={() =>
          mutation.mutate({
            title: "Fancy Title",
            body: "Fancy Body",
            userId: 74916,
          })
        }
      >
        Add New User
      </button>
    </div>
  );
}
