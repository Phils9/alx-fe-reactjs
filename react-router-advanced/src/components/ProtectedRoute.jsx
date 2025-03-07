import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../useAuth'; // Import the useAuth hook

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth(); // Use the useAuth hook

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;