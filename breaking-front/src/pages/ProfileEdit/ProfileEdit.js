import React, { useContext, useState } from 'react';
import { UserInformationContext } from 'providers/UserInformationProvider';
import ProfileSettingForm from 'components/ProfileSettingForm/ProfileSettingForm';
import useProfileDetailData from 'pages/ProfileEdit/hooks/queries/useProfileDetailData';
import useProfileEdit from 'pages/ProfileEdit/hooks/mutations/useProfileEdit';
import useProfileWithdrawal from 'pages/ProfileEdit/hooks/mutations/useProfileWithdrawal';
import Line from 'components/Line/Line';
import Modal from 'components/Modal/Modal';
import Button from 'components/Button/Button';
import * as Style from 'pages/ProfileEdit/ProfileEdit.styles';

const ProfileEdit = () => {
  const { userId } = useContext(UserInformationContext);

  const [isOpenWithdrawal, setIsOpenWithdrawal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const { data: profileData, isLoading: isProfileDataLoading } =
    useProfileDetailData();
  const { mutate: ProfileEditMutate, isLoading: isProfileEditLoading } =
    useProfileEdit();
  const { mutate: ProfileWithdrawal } = useProfileWithdrawal();

  const toggleModal = () => {
    setIsOpenWithdrawal((pre) => !pre);
  };

  const handleCheck = () => {
    setIsChecked((pre) => !pre);
  };

  const handleWithdrawalSubmit = (event) => {
    event.preventDefault();
    isChecked ? ProfileWithdrawal(userId) : alert('동의하지 않았습니다.');
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
            <Style.ProfileWithdrawalForm onSubmit={handleWithdrawalSubmit}>
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
