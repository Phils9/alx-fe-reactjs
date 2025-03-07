import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../useAuth'; // Import the useAuth hook

const Login = () => {
  const { login } = useAuth(); // Use the useAuth hook
  const navigate = useNavigate();

  const handleLogin = () => {
    login(); // Set isAuthenticated to true
    navigate('/profile'); // Redirect to the profile page
  };

  return (
    <div>
      <h2>Login Page</h2>
      <p>Please log in to access your profile.</p>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;