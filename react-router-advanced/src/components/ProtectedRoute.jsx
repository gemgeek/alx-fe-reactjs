import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  // If not logged in, redirect to homepage or login
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}