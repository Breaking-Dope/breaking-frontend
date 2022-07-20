import React, { useState } from 'react';
import PorpTypes from 'prop-types';

export const UserInformationContext = React.createContext();

const UserInformationProvider = ({ children }) => {
  const [userInfomation, setUserInfomation] = useState({
    userId: null,
    profileImgURL: '',
    nickname: '',
    balance: null,
    isLogin: true,
  });

  return (
    <UserInformationContext.Provider
      value={{ ...userInfomation, setUserInfomation }}
    >
      {children}
    </UserInformationContext.Provider>
  );
};

UserInformationProvider.propTypes = {
  children: PorpTypes.node,
};

export default UserInformationProvider;
