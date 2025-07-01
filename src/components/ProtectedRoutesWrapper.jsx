// components/ProtectedRouteWrapper.jsx
import React from 'react';
import ProtectedRoute from './ProtectedRoute';

const ProtectedRouteWrapper = ({ Component }) => (
  <ProtectedRoute>
    <Component />
  </ProtectedRoute>
);

export default ProtectedRouteWrapper;
