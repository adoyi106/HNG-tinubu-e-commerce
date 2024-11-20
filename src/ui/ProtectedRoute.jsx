import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "./Spinner";
import { Navigate, useLocation } from "react-router-dom";

//eslint-disable-next-line
function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth0();
  const location = useLocation();

  if (isLoading) return <Spinner />;

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

export default ProtectedRoute;
