import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services/apiProducts";

export function useCart() {
  const {
    data: cart,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
    onError: (error) => {
      console.error("Failed to fetch cart:", error);
    },
  });

  console.log(cart);
  return { cart, isLoading, error };
}
