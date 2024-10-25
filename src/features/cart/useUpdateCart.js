import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart } from "../../services/apiProducts";
import toast from "react-hot-toast";

export function useUpdateCart() {
  const queryClient = useQueryClient();
  const { mutate: updateCart, isLoading: isAdding } = useMutation({
    mutationFn: ({ obj }) => addToCart(obj),
    onSuccess: () => {
      toast.success("Item successfully added to cart");
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateCart, isAdding };
}
