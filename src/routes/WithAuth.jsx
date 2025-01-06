import React, { memo } from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Install this package if not already installed

const WithAuth = (WrappedComponent) => {
  const AuthenticatedComponent = memo((props) => {
    const token = localStorage.getItem('token');
    let isAuthenticated = false;

    if (token) {
      try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000; // Convert to seconds
        isAuthenticated = decoded.exp > currentTime;
      } catch (error) {
        console.error('Error decoding token', error);
        isAuthenticated = false;
      }
    }

    if (!isAuthenticated) {
      return <Navigate to="/" replace />;
    }

    return (
      <>
        <WrappedComponent {...props} />
      </>
    );
  });

  return AuthenticatedComponent;
};

export default WithAuth;
