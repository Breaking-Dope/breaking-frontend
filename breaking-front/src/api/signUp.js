import axios from 'axios';
import { PATH } from 'constants/path';

export const postSignUp = (userData) => {
  return axios({
    method: 'post',
    url: PATH.OAUTH2_SIGNUP,
    headers: { 'Content-Type': 'multipart/form-data' },
    data: userData,
  });
};

export const postNicknameValidation = (nickname) => {
  return axios({
    method: 'post',
    url: PATH.OAUTH2_SIGNUP_VALIDATE_NICKNAME,
    data: nickname,
  });
};

export const postPhoneNumberValidation = (phoneNumber) => {
  return axios({
    method: 'post',
    url: PATH.OAUTH2_SIGNUP_VALIDATE_PHONE_NUMBER,
    data: phoneNumber,
  });
};

export const postEmailValidation = (email) => {
  return axios({
    method: 'post',
    url: PATH.OAUTH2_SIGNUP_VALIDATE_EMAIL,
    data: email,
  });
};
