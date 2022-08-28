import React, { useContext, useEffect } from 'react';
import Header from 'components/Header/Header';
import { UserInformationContext } from 'providers/UserInformationProvider';

export default {
  title: 'components/Header',
  component: Header,
};

export const DefaultHeader = (args) => {
  return <Header />;
};

export const UserHeader = (args) => {
  const { setUserInformation } = useContext(UserInformationContext);

  useEffect(() => {
    setUserInformation((pre) => ({ ...pre, isLogin: true }));
  }, []);
  return <Header />;
};
