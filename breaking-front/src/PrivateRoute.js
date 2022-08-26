import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PAGE_PATH } from 'constants/path';

const PrivateRoute = ({
  redirectPath = PAGE_PATH.LOGIN,
  restricted,
  children,
}) => {
  const accessToken = localStorage.getItem('access_token');

  if (!accessToken && !restricted) {
    alert('로그인이 필요합니다.');
    return <Navigate to={redirectPath} replace />;
  }

  if (accessToken && restricted) return <Navigate to={redirectPath} replace />;

  return children ? children : <Outlet />;
};

PrivateRoute.propTypes = {
  redirectPath: PropTypes.string,
  restricted: PropTypes.bool,
  children: PropTypes.node,
};

export default PrivateRoute;
