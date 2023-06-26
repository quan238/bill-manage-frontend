import React from "react";

import Error403 from "pages/403";
import { useAuth } from "hooks/useAuth";

export function ProtectedRoute({ children }) {
  const { user } = useAuth();
  if (!user) {
    // user is not authenticated
    return <Error403 />;
  }
  return children;
}
