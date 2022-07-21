import React, { useState } from 'react';
import PorpTypes from 'prop-types';

export const UserInformationContext = React.createContext();

const UserInformationProvider = ({ children }) => {
  const [userInformation, setUserInformation] = useState({
    userId: null,
    profileImgURL: '',
    nickname: '',
    balance: null,
    isLogin: false,
  });

  return (
    <UserInformationContext.Provider
      value={{ ...userInformation, setUserInformation }}
    >
      {children}
    </UserInformationContext.Provider>
  );
};

UserInformationProvider.propTypes = {
  children: PorpTypes.node,
};

export default UserInformationProvider;
