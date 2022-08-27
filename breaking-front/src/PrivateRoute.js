import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PAGE_PATH } from 'constants/path';
import { UserInformationContext } from 'providers/UserInformationProvider';

const PrivateRoute = ({
  redirectPath = PAGE_PATH.LOGIN,
  restricted,
  children,
}) => {
  const { isLogin } = useContext(UserInformationContext);

  if (!isLogin && !restricted) {
    alert('로그인이 필요합니다.');
    return <Navigate to={redirectPath} replace />;
  }

  if (isLogin && restricted) return <Navigate to={redirectPath} replace />;

  return children ? children : <Outlet />;
};

PrivateRoute.propTypes = {
  redirectPath: PropTypes.string,
  restricted: PropTypes.bool,
  children: PropTypes.node,
};

export default PrivateRoute;
