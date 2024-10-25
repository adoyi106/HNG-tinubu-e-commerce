import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useProducts() {
  const queryClient = useQueryClient();
  //PAGINATION
  const [searchParams] = useSearchParams();
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  //eslint-disable-next-line
  const {
    data: { data: products, count } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", page],
    queryFn: () => getProducts({ page }),
  });

  //PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);

  //get next data
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["products", page + 1],
      queryFn: () => getProducts({ page: page + 1 }),
    });

  page > 1;
  queryClient.prefetchQuery({
    queryKey: ["products", page - 1],
    queryFn: () => getProducts({ page: page - 1 }),
  });

  return { products, count, isLoading, error };
}
