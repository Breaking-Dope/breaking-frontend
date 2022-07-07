import { PATH } from 'constants/path';
import api from 'api/api';

export const postSignUp = (userData) => {
  return api({
    method: 'post',
    url: PATH.OAUTH2_SIGNUP,
    'Content-Type': 'multipart/form-data',
    data: userData,
  });
};

export const postNicknameValidation = (nickname) => {
  return api({
    method: 'post',
    url: PATH.OAUTH2_SIGNUP_VALIDATE_NICKNAME,
    data: nickname,
  });
};

export const postPhoneNumberValidation = (phoneNumber) => {
  return api({
    method: 'post',
    url: PATH.OAUTH2_SIGNUP_VALIDATE_PHONE_NUMBER,
    data: phoneNumber,
  });
};

export const postEmailValidation = (email) => {
  return api({
    method: 'post',
    url: PATH.OAUTH2_SIGNUP_VALIDATE_EMAIL,
    data: email,
  });
};
