import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PAGE_PATH } from 'constants/path';
import MainFeed from 'pages/MainFeed/MainFeed';
import SocialLogin from 'pages/SocialLogin/SocialLogin';
import KakaoRedirect from 'pages/SocialLogin/Redirect/KakaoRedirect';
import GoogleRedirect from 'pages/SocialLogin/Redirect/GoogleRedirect';
import SignUp from 'pages/SignUp/SignUp';
import Profile from 'pages/Profile/Profile';
import ProfileEdit from 'pages/ProfileEdit/ProfileEdit';

export const BreakingRoutes = () => {
  return (
    <Routes>
      <Route path={PAGE_PATH.HOME} element={<MainFeed />} />
      <Route path={PAGE_PATH.LOGIN} element={<SocialLogin />} />
      <Route path={PAGE_PATH.KAKAO_LOGIN} element={<KakaoRedirect />}></Route>
      <Route path={PAGE_PATH.GOOGLE_LOGIN} element={<GoogleRedirect />}></Route>
      <Route path={PAGE_PATH.SIGNUP} element={<SignUp />} />
      <Route path={PAGE_PATH.PROFILE(':id')} element={<Profile />} />
      <Route path={PAGE_PATH.PROFILE_EDIT} element={<ProfileEdit />} />
    </Routes>
  );
};
