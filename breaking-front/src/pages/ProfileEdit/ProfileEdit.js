import React, { useContext, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import ProfileSettingForm from 'components/ProfileSettingForm/ProfileSettingForm';
import useProfileDetailData from 'hooks/queries/useProfileDetailData';
import { putProfileEdit } from 'api/profileEdit';
import { PAGE_PATH } from 'constants/path';
import * as Style from 'pages/ProfileEdit/ProfileEdit.styles';
import Line from 'components/Line/Line';
import Modal from 'components/Modal/Modal';
import Button from 'components/Button/Button';
import { deleteProfileWithdrawal } from 'api/profile';
import { UserInformationContext } from 'providers/UserInformationProvider';

const ProfileEdit = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { userId } = useContext(UserInformationContext);

  const { data: profileData, isLoading: isProfileDataLoading } =
    useProfileDetailData();
  const [isOpenWithdrawal, setIsOpenWithdrawal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const { mutate: ProfileEditMutate, isLoading: isProfileEditLoading } =
    useMutation(putProfileEdit, {
      onSuccess: (res) => {
        alert('변경사항을 저장하였습니다.');
        queryClient.invalidateQueries('jwtValidate');
        navigate(PAGE_PATH.HOME);
      },
      onError: () => {
        //에러 페이지 이동
      },
    });
  const { mutate: ProfileWithdrawal } = useMutation(deleteProfileWithdrawal);

  const toggleModal = () => {
    setIsOpenWithdrawal((pre) => !pre);
  };

  const handleCheck = () => {
    setIsChecked((pre) => !pre);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    isChecked
      ? ProfileWithdrawal(userId, {
          onSuccess: () => {
            alert('탈퇴 완료되었습니다.');
            navigate(PAGE_PATH.HOME);
          },
        })
      : alert('동의하지 않았습니다.');
  };

  return (
    <>
      <ProfileSettingForm
        pageType="profileEdit"
        userDefaultData={profileData?.data}
        isProfileDataLoading={isProfileDataLoading}
        isProfileMutateLoading={isProfileEditLoading}
        mutate={ProfileEditMutate}
      />
      <Line width="600px" />
      <Style.ToggleContainer>
        <Style.WithdrawalToggle onClick={toggleModal}>
          탈퇴하기
        </Style.WithdrawalToggle>
      </Style.ToggleContainer>
      {isOpenWithdrawal && (
        <>
          <Modal
            isOpen={isOpenWithdrawal}
            closeClick={toggleModal}
            title="탈퇴"
            grid={false}
          >
            <Style.ProfileWithdrawalForm onSubmit={handleSubmit}>
              <Style.WithdrawalCaution>
                탈퇴 시 Breaking에서 활동했던 모든 정보가 사라집니다.
                <Style.Check>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheck}
                  />
                  동의
                </Style.Check>
              </Style.WithdrawalCaution>
              <Button type="submit">탈퇴하기</Button>
            </Style.ProfileWithdrawalForm>
          </Modal>
        </>
      )}
    </>
  );
};

export default ProfileEdit;
