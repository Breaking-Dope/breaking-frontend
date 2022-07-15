import React, { useRef, useState } from 'react';
import Button from 'components/Button/Button';
import SignUpInput from 'components/SignUpInput/SignUpInput';
import useIsValidProfile from 'hooks/queries/useIsValidProfile';
import useInputs from 'hooks/useInputs';
import MESSAGE from 'constants/message';
import fileToBase64 from 'utils/fileToBase64';
import { ReactComponent as XMark } from 'assets/svg/x-mark.svg';
import * as Style from 'components/SignUpForm/SignUpForm.styles';
import ProfileImage from 'components/ProfileImage/ProfileImage';
import PropTypes from 'prop-types';

export default function SignUpForm({ username, userDefaultData, mutation }) {
  const imageRef = useRef();

  const [
    { profileImgURL, realName, nickname, phoneNumber, statusMsg, email, role },
    handleChange,
    setForm,
  ] = useInputs(userDefaultData);
  const [imageSrc, setImageSrc] = useState(profileImgURL);
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

  const handleImageUploadPreview = (event) => {
    const imageFile = event.target.files[0];
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
    setForm((form) => ({ ...form, profileImg: '' }));
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

    if (username) userData.username = username;
    if (profileImgURL !== '') formData.append('profileImg', profileImgURL);
    formData.append('signUpRequest', JSON.stringify(userData));

    mutation.mutate(formData);
  };

  return (
    <>
      <Style.Form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
        <Style.ProfileImageContainer>
          <Style.ProfileImageInput
            ref={imageRef}
            type="file"
            name="profileImg"
            accept="image/*"
            onChange={handleImageUploadPreview}
          />
          <ProfileImage
            size="xlarge"
            src={imageSrc}
            alt="미리보기"
            onClick={imageUploadClick}
          />
          <Style.LabelText onClick={imageUploadClick}>
            프로필 추가
          </Style.LabelText>
          {profileImgURL && (
            <Style.XMarkIcon>
              <XMark onClick={imageDeleteClick} />
            </Style.XMarkIcon>
          )}
        </Style.ProfileImageContainer>
        <SignUpInput
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
        <SignUpInput
          type="text"
          name="nickname"
          placeholder="닉네임"
          label="닉네임"
          errorMessage={nicknameErrorMessage}
          value={nickname}
          onChange={handleChange}
          onBlur={() => {
            if (username && userDefaultData.nickname === nickname)
              setNicknameErrorMessage('');
            else {
              nickname === ''
                ? setNicknameErrorMessage(MESSAGE.SIGNUP.BLANK)
                : NicknameReFetch();
            }
          }}
          required
        />
        <SignUpInput
          type="text"
          name="phoneNumber"
          placeholder="전화번호"
          label="전화번호"
          errorMessage={phoneNumberErrorMessage}
          value={phoneNumber}
          onChange={handleChange}
          maxLength="11"
          onBlur={() => {
            if (username && userDefaultData.phoneNumber === phoneNumber)
              setPhoneNumberErrorMessage('');
            else {
              phoneNumber === ''
                ? setPhoneNumberErrorMessage(MESSAGE.SIGNUP.BLANK)
                : PhoneNumberReFetch();
            }
          }}
          required
        />
        <SignUpInput
          type="email"
          name="email"
          label="이메일"
          placeholder="이메일"
          errorMessage={emailErrorMessage}
          value={email}
          onChange={handleChange}
          onBlur={() => {
            if (username && userDefaultData.email === email)
              setEmailErrorMessage('');
            else {
              email === ''
                ? setEmailErrorMessage(MESSAGE.SIGNUP.BLANK)
                : EmailReFetch();
            }
          }}
          required
        />
        <SignUpInput
          type="text"
          label="상태메시지(선택)"
          placeholder="상태메시지"
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
        <Style.SubmitButton type="submit" size="large">
          회원가입
        </Style.SubmitButton>
      </Style.Form>
    </>
  );
}

SignUpForm.propTypes = {
  username: PropTypes.string,
  userDefaultData: PropTypes.object.isRequired,
  mutation: PropTypes.func.isRequired,
};
