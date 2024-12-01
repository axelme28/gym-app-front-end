import React, { memo } from 'react';
import { Navigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const WithAuth = (WrappedComponent) => {
  const AuthenticatedComponent = memo((props) => {
    const isAuthenticated = localStorage.getItem('token') !== null;

    if (!isAuthenticated) {
      return <Navigate to="/" replace />;
    }

    return (
      <>
        <WrappedComponent {...props} />
        {/* this is the nav */}
      </>
    );
  });

  return AuthenticatedComponent;
};

export default WithAuth;
