import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';
import Button from 'components/Button/Button';
import ProfileSettingInput from 'components/ProfileSettingForm/ProfileSettingInput';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import Skeleton from 'components/Skeleton/Skeleton';
import useIsValidProfile from 'hooks/queries/useIsValidProfile';
import ImageUrlConverter from 'utils/ImageUrlConverter';
import MESSAGE from 'constants/message';
import useInputs from 'hooks/useInputs';
import fileToBase64 from 'utils/fileToBase64';
import * as Style from 'components/ProfileSettingForm/ProfileSettingForm.styles';
import { ReactComponent as XMark } from 'assets/svg/x_mark.svg';

export default function ProfileSettingForm({
  pageType,
  username,
  isProfileDataLoading,
  isProfileMutateLoading,
  userDefaultData,
  mutate,
}) {
  const imageRef = useRef();
  const theme = useTheme();
  const [
    {
      profileImgURL: profileImg,
      realName,
      nickname,
      phoneNumber,
      statusMsg,
      email,
      role,
    },
    handleChange,
    setForm,
  ] = useInputs(userDefaultData);
  const [imageSrc, setImageSrc] = useState(userDefaultData.profileImgURL);
  const [realNameErrorMessage, setRealNameErrorMessage] = useState('');
  const [nicknameErrorMessage, setNicknameErrorMessage] = useState('');
  const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  const { refetch: NicknameReFetch } = useIsValidProfile(
    'nickname',
    nickname,
    setNicknameErrorMessage
  );
  const { refetch: PhoneNumberReFetch } = useIsValidProfile(
    'phone-number',
    phoneNumber,
    setPhoneNumberErrorMessage
  );
  const { refetch: EmailReFetch } = useIsValidProfile(
    'email',
    email,
    setEmailErrorMessage
  );

  const handleImageUploadPreview = (imageFile) => {
    if (!imageFile) return;

    setForm((form) => ({ ...form, profileImgURL: imageFile }));
    fileToBase64(imageFile, setImageSrc);
  };

  const imageUploadClick = (event) => {
    event.preventDefault();
    imageRef.current.click();
  };

  const imageDeleteClick = () => {
    setImageSrc('');
    setForm((form) => ({ ...form, profileImgURL: '' }));
  };

  const dragDropUpload = (event) => {
    event.preventDefault();
    event.stopPropagation();
    handleImageUploadPreview(event.dataTransfer.files[0]);
  };

  const dragOverHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const form = event.target.form;
      const index = [...form].indexOf(event.target);

      event.target.blur();
      form.elements[index].focus();
    }
  };

  const handlePhoneNumberChange = (event) => {
    setForm((form) => ({
      ...form,
      phoneNumber: event.target.value.replace(/[^0-9]/g, ''),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nicknameErrorMessage)
      return alert(MESSAGE.SIGNUP.SUBMIT_INVALID_NICKNAME);
    else if (phoneNumberErrorMessage)
      return alert(MESSAGE.SIGNUP.SUBMIT_INVALID_PHONENUMBER);
    else if (emailErrorMessage)
      return alert(MESSAGE.SIGNUP.SUBMIT_INVALID_EMAIL);

    const formData = new FormData();

    const userData = {
      realName,
      nickname,
      phoneNumber,
      email,
      statusMsg,
      role,
    };

    if (pageType === 'profileEdit') {
      userData.isProfileImgChanged =
        profileImg !== userDefaultData.profileImgURL;

      formData.append(
        'profileImg',
        userData.isProfileImgChanged ? profileImg : null
      );
      formData.append('updateRequest', JSON.stringify(userData));
    } else if (pageType === 'signUp') {
      userData.username = username;

      formData.append('profileImg', profileImg);
      formData.append('signUpRequest', JSON.stringify(userData));
    }

    mutate(formData);
  };

  useEffect(() => {
    setForm(userDefaultData);
    userDefaultData.profileImgURL &&
      setImageSrc(ImageUrlConverter(userDefaultData.profileImgURL));
  }, [userDefaultData, pageType, setForm]);

  return (
    <>
      <Style.Form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
        <Style.ProfileImageContainer
          onDrop={dragDropUpload}
          onDragOver={dragOverHandler}
        >
          <Style.ProfileImageInput
            ref={imageRef}
            type="file"
            name="profileImg"
            accept="image/*"
            onChange={(event) =>
              handleImageUploadPreview(event.target.files[0])
            }
          />
          <Style.ProfileImage>
            {isProfileDataLoading ? (
              <Skeleton width="200px" height="200px" radius="50%" />
            ) : (
              <ProfileImage
                size="xlarge"
                src={imageSrc}
                alt="미리보기"
                onClick={imageUploadClick}
              />
            )}

            {profileImg && (
              <Style.XMarkIcon>
                <XMark onClick={imageDeleteClick} />
              </Style.XMarkIcon>
            )}
          </Style.ProfileImage>

          <Style.LabelText onClick={imageUploadClick}>
            프로필 추가
          </Style.LabelText>
        </Style.ProfileImageContainer>
        <ProfileSettingInput
          type="text"
          name="realName"
          placeholder="이름"
          label="이름"
          errorMessage={realNameErrorMessage}
          value={realName}
          onChange={handleChange}
          onBlur={() => {
            realName === ''
              ? setRealNameErrorMessage(MESSAGE.SIGNUP.BLANK)
              : setRealNameErrorMessage('');
          }}
          autoFocus
          required
        />
        <ProfileSettingInput
          type="text"
          name="nickname"
          placeholder="닉네임"
          label="닉네임"
          errorMessage={nicknameErrorMessage}
          value={nickname}
          onChange={handleChange}
          onBlur={() => {
            nickname === ''
              ? setNicknameErrorMessage(MESSAGE.SIGNUP.BLANK)
              : NicknameReFetch();
          }}
          required
        />
        <ProfileSettingInput
          type="text"
          name="phoneNumber"
          placeholder="전화번호"
          label="전화번호"
          errorMessage={phoneNumberErrorMessage}
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          maxLength="11"
          onBlur={() => {
            phoneNumber === ''
              ? setPhoneNumberErrorMessage(MESSAGE.SIGNUP.BLANK)
              : PhoneNumberReFetch();
          }}
          required
        />
        <ProfileSettingInput
          type="email"
          name="email"
          label="이메일"
          placeholder="이메일"
          errorMessage={emailErrorMessage}
          value={email}
          onChange={handleChange}
          onBlur={() => {
            email === ''
              ? setEmailErrorMessage(MESSAGE.SIGNUP.BLANK)
              : EmailReFetch();
          }}
          required
        />
        <ProfileSettingInput
          type="text"
          label="상태메시지(선택)"
          placeholder="상태메시지(최대 60자)"
          name="statusMsg"
          value={statusMsg}
          onChange={handleChange}
          maxLength="60"
        />
        <p>회원 유형</p>
        <Style.Role>
          <Button
            type="button"
            name="USER"
            isSelected={role === 'USER'}
            onClick={() => {
              setForm((form) => ({ ...form, role: 'USER' }));
            }}
          >
            일반인
          </Button>
          <Button
            type="button"
            name="PRESS"
            isSelected={role === 'PRESS'}
            onClick={() => setForm((form) => ({ ...form, role: 'PRESS' }))}
          >
            언론인
          </Button>
        </Style.Role>
        {isProfileMutateLoading ? (
          <Style.Loading type="bars" color={theme.blue[900]} />
        ) : (
          <Style.SubmitButton type="submit" size="large">
            {pageType === 'signUp' ? '회원가입' : '프로필 수정'}
          </Style.SubmitButton>
        )}
      </Style.Form>
    </>
  );
}

ProfileSettingForm.propTypes = {
  pageType: PropTypes.oneOf(['signUp', 'profileEdit']).isRequired,
  username: PropTypes.string,
  userDefaultData: PropTypes.object,
  mutate: PropTypes.func.isRequired,
  isProfileDataLoading: PropTypes.bool,
  isProfileMutateLoading: PropTypes.bool,
};

ProfileSettingForm.defaultProps = {
  userDefaultData: {
    profileImgURL: '',
    realName: '',
    nickname: '',
    phoneNumber: '',
    email: '',
    statusMsg: '',
    role: 'USER',
  },
  isProfileDataLoading: false,
  isProfileMutateLoading: false,
};
