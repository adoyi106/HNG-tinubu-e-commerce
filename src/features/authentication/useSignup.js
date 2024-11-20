import { useMutation } from "@tanstack/react-query";
import { createUsers } from "../../services/apiProducts";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const {
    mutate: signup,
    isLoading,
    error,
  } = useMutation({
    mutationFn: createUsers,
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address."
      );
      navigate("/products");
    },
    onError: (err) => {
      console.error("ERROR", err);
      toast.error("SignUp failed");
    },
  });
  return { signup, error, isLoading };
}
