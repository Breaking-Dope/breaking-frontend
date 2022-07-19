import React from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import ProfileSettingForm from 'components/ProfileSettingForm/ProfileSettingForm';
import useProfileDetailData from 'hooks/queries/useProfileDetailData';
import { putProfileEdit } from 'api/profileEdit';
import { PAGE_PATH } from 'constants/path';

const ProfileEdit = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useProfileDetailData();

  const { mutate: ProfileEditMutate } = useMutation(putProfileEdit, {
    onSuccess: (res) => {
      console.log(res);
      alert('변경사항을 저장하였습니다.');
      navigate(PAGE_PATH.HOME);
    },
    onError: () => {
      //에러 페이지 이동
    },
  });

  return (
    <>
      <ProfileSettingForm
        pageType="profileEdit"
        isLoading={isLoading}
        userDefaultData={data?.data}
        mutate={ProfileEditMutate}
      />
      {/* 추후 탈퇴 기능 구현 */}
    </>
  );
};

export default ProfileEdit;
