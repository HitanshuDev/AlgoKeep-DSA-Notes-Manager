// src/components/LogoutButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token
    navigate('/login'); // Redirect to login page
  };

  return (
    <button
      onClick={handleLogout}
      className=" text-tertiary cursor-pointer hover:underline"
    >
      Logout
    </button>
  );
}

export default LogoutButton;
