import React from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const user = true; // user will be fetched from the reduex store or context;
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
