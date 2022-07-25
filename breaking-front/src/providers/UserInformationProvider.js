import React, { useState } from 'react';
import PorpTypes from 'prop-types';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { getJWTvalidation } from 'api/signUp';

export const UserInformationContext = React.createContext();

const UserInformationProvider = ({ children }) => {
  const [userInformation, setUserInformation] = useState({
    userId: null,
    profileImgURL: '',
    nickname: '',
    price: null,
  });

  const { data, isSuccess, isError } = useQuery(
    ['initalizeValidUser'],
    getJWTvalidation,
    { retry: 0 }
  );

  useEffect(() => {
    isSuccess && setUserInformation({ ...data?.data, isLogin: true });
    isError && setUserInformation((pre) => ({ ...pre, isLogin: false }));
  }, [data, isError, isSuccess]);

  return (
    <UserInformationContext.Provider
      value={{ ...userInformation, setUserInformation }}
    >
      {'isLogin' in userInformation && children}
    </UserInformationContext.Provider>
  );
};

UserInformationProvider.propTypes = {
  children: PorpTypes.node,
};

export default UserInformationProvider;
