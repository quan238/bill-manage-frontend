import React from "react";
import { useAuth } from "hooks/useAuth";
import { Navigate } from "react-router-dom";
import config from "config";

export function ProtectedRoute({ children }) {
  const { accessToken } = useAuth();
  if (!accessToken && !localStorage.getItem(config.auth.storageTokenKeyName)) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
}
