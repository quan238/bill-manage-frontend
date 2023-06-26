import React from "react";
import { useAuth } from "hooks/useAuth";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const { user } = useAuth();
  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
}
