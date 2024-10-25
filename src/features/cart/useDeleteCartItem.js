import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCartItem as deleteCartItemApi } from "../../services/apiProducts";
import toast from "react-hot-toast";

export function useDeleteCartItem() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteCartItem } = useMutation({
    mutationFn: deleteCartItemApi,
    onSuccess: () => {
      toast.success("cart item sucessfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { deleteCartItem, isDeleting };
}
