// src/Routes/ProtectedRoute.js
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../contexts/AppProvider";

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AppContext);
  if (!token) return <Navigate to="/login" replace />;
  return children;
};

export default ProtectedRoute;
