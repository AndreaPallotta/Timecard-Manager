import routes from '@/services/Routes';
import PropTypes from 'prop-types';
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedIn, children }) => {
  return isLoggedIn ? children : <Navigate to={routes.auth} replace />;
};

ProtectedRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
};

export default ProtectedRoute;
