import React, { useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { postSignUp } from 'api/signUp';
import Button from 'components/Button/Button';
import SignUpInput from 'components/SignUpInput/SignUpInput';
import useIsValidEmail from 'hooks/useIsValidEmail';
import useIsValidNickname from 'hooks/useIsValidNickname';
import useIsValidPhoneNumber from 'hooks/useIsValidPhoneNumber';
import useInputs from 'hooks/useInputs';
import MESSAGE from 'constants/message';
import REGEXP from 'constants/regexp';
import fileToBase64 from 'utils/fileToBase64';
import * as Style from 'pages/SignUp/SignUp.styles';
import defaultProfileImage from 'assets/svg/default-profile-image.svg';
import { ReactComponent as XMark } from 'assets/svg/x-mark.svg';
import { PATH } from 'constants/path';

const SignUp = () => {
  const navigate = useNavigate();
  const [profileImg, setProfileImg] = useState('');
  const [
    { realname, nickname, phoneNumber, statusMessage, email, role },
    handleChange,
    setForm,
  ] = useInputs({
    realname: '',
    nickname: '',
    phoneNumber: '',
    statusMessage: '',
    email: '',
    role: 'USER',
  });

  const [isValidMessage, setIsValidMessage] = useState({
    nickname: '',
    phoneNumber: '',
    email: '',
  });

  const [imageSrc, setImageSrc] = useState(defaultProfileImage);

  const imageInput = useRef();

  const IsValidNickname = useIsValidNickname(setIsValidMessage);
  const IsValidPhoneNumber = useIsValidPhoneNumber(setIsValidMessage);
  const IsValidEmail = useIsValidEmail(setIsValidMessage);

  const handleImageUploadPreview = async (event) => {
    const imageFile = event.target.files[0];
    setProfileImg(imageFile);

    await fileToBase64(imageFile).then((data) => setImageSrc(data));
  };

  const imageDeleteClick = () => {
    //기본 이미지가 아닐 때에만 실행
    if (imageSrc !== defaultProfileImage) {
      setImageSrc(defaultProfileImage);
      setProfileImg('');
    }
  };

  const SignUp = useMutation(postSignUp, {
    onSuccess: (res) => {
      alert(`환영합니다. ${nickname}님`);
      navigate(PATH.HOME);
    },
    onError: () => {
      //에러 페이지 이동
    },
  });

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.target.blur();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();

    for (const value of Object.values(isValidMessage)) {
      if (value !== '') return alert('정확하게 기입해주시기 바랍니다.');
    }

    if (profileImg !== '') formData.append('profileImg', profileImg);
    formData.append(
      'signUpRequest',
      JSON.stringify({
        realname,
        nickname,
        phoneNumber,
        statusMessage,
        email,
        role,
      })
    );

    SignUp.mutate(formData);
  };

  return (
    <>
      <Style.Form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
        <Style.UserImageContainer>
          <Style.UserImage src={imageSrc} alt="미리보기" />
          <Style.UserImageLabel>
            <Style.UserImageInput
              type="file"
              ref={imageInput}
              name="profileImg"
              accept="image/*"
              onChange={handleImageUploadPreview}
            />
            프로필 추가
          </Style.UserImageLabel>

          <Style.XMarkIcon>
            <XMark onClick={imageDeleteClick} />
          </Style.XMarkIcon>
        </Style.UserImageContainer>
        <SignUpInput
          type="text"
          label="성명"
          name="realname"
          value={realname}
          onChange={handleChange}
          autoFocus
          required
        />
        <SignUpInput
          type="text"
          label="닉네임"
          errorMessage={isValidMessage.nickname}
          name="nickname"
          value={nickname}
          onChange={handleChange}
          onBlur={() => {
            REGEXP.NICKNAME.test(nickname)
              ? IsValidNickname.mutate({ nickname })
              : setIsValidMessage((message) => ({
                  ...message,
                  nickname: MESSAGE.SIGNUP.INVALID_NICKNAME,
                }));
          }}
          required
        />
        <SignUpInput
          type="text"
          label="전화번호"
          errorMessage={isValidMessage.phoneNumber}
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleChange}
          onBlur={() => {
            REGEXP.PHONENUMBER.test(phoneNumber)
              ? IsValidPhoneNumber.mutate({ phoneNumber })
              : setIsValidMessage((message) => ({
                  ...message,
                  phoneNumber: MESSAGE.SIGNUP.INVALID_PHONENUMBER,
                }));
          }}
          maxLength="11"
          required
        />
        <SignUpInput
          type="text"
          label="상태메시지(선택)"
          name="statusMessage"
          value={statusMessage}
          onChange={handleChange}
          maxLength="60"
        />
        <SignUpInput
          type="email"
          label="이메일"
          errorMessage={isValidMessage.email}
          name="email"
          value={email}
          onChange={handleChange}
          onBlur={() => {
            REGEXP.EMAIL.test(email)
              ? IsValidEmail.mutate({ email })
              : setIsValidMessage((message) => ({
                  ...message,
                  email: MESSAGE.SIGNUP.INVALID_EMAIL,
                }));
          }}
          required
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
};

export default SignUp;
