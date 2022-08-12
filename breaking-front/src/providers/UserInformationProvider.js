import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import useJWTValidate from 'hooks/queries/useJWTValidate';

export const UserInformationContext = React.createContext();

const UserInformationProvider = ({ children }) => {
  const [userInformation, setUserInformation] = useState({});

  const { data, isSuccess, isError } = useJWTValidate(true);

  useEffect(() => {
    isSuccess && setUserInformation({ ...data?.data, isLogin: true });
    isError &&
      setUserInformation({
        userId: null,
        profileImgURL: '',
        nickname: '',
        balance: null,
        isLogin: false,
      });
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
  children: PropTypes.node,
};

export default UserInformationProvider;
