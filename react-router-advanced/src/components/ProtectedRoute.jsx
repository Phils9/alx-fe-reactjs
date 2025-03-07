import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../useAuth'; // Import the useAuth hook

const ProtectedRoute = ({ isAuthenticated: propIsAuthenticated }) => {
  const { isAuthenticated: hookIsAuthenticated } = useAuth(); // Use the useAuth hook

  // Use the prop value if provided, otherwise use the hook value
  const isUserAuthenticated = propIsAuthenticated !== undefined ? propIsAuthenticated : hookIsAuthenticated;

  if (!isUserAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;