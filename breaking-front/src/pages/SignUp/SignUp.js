import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { postSignUp } from 'api/signUp';
import Button from 'components/Button/Button';
import SignUpInput from 'components/SignUpInput/SignUpInput';
import useIsValidEmail from 'hooks/useIsValidEmail';
import useIsValidNickname from 'hooks/useIsValidNickname';
import useIsValidPhoneNumber from 'hooks/useIsValidPhoneNumber';
import useInputs from 'hooks/useInputs';
import MESSAGE from 'constants/message';
import REGEXP from 'constants/regexp';
import { PATH } from 'constants/path';
import fileToBase64 from 'utils/fileToBase64';
import * as Style from 'pages/SignUp/SignUp.styles';
import defaultProfileImage from 'assets/svg/default-profile-image.svg';
import { ReactComponent as XMark } from 'assets/svg/x-mark.svg';

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [profileImg, setProfileImg] = useState('');
  const [
    { realname, nickname, phoneNumber, statusMsg, email, role },
    handleChange,
    setForm,
  ] = useInputs({
    realname: '',
    nickname: '',
    phoneNumber: '',
    email: '',
    statusMsg: '',
    role: 'USER',
  });
  const [errorMessage, setErrorMessage] = useState({
    nickname: '',
    phoneNumber: '',
    email: '',
  });
  const [imageSrc, setImageSrc] = useState(defaultProfileImage);

  const { mutate: IsValidNickname, isError: NicknameError } =
    useIsValidNickname();
  const { mutate: IsValidPhoneNumber, isError: PhoneNumberError } =
    useIsValidPhoneNumber();
  const { mutate: IsValidEmail, isError: EmailError } = useIsValidEmail();

  const handleImageUploadPreview = async (event) => {
    const imageFile = event.target.files[0];
    setProfileImg(imageFile);

    await fileToBase64(imageFile).then((data) => setImageSrc(data));
  };

  const imageDeleteClick = () => {
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
      const form = event.target.form;
      const index = [...form].indexOf(event.target);

      event.target.blur();
      form.elements[index].focus();
    }
  };

  const inputOnBlur = (regexp, isValidApi, name, value, invalidMessage) => {
    let message = '';

    regexp ? isValidApi({ [name]: value }) : (message = invalidMessage);

    setErrorMessage((data) => ({ ...data, [name]: message }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();

    for (const value of Object.values(errorMessage)) {
      if (value !== '') return alert('정확하게 기입해주시기 바랍니다.');
    }

    const userData = {
      username: location.state,
      realname,
      nickname,
      phoneNumber,
      email,
      statusMsg,
      role,
    };

    if (profileImg !== '') formData.append('profileImg', profileImg);
    formData.append('signUpRequest', JSON.stringify({ userData }));
    SignUp.mutate(formData);
  };

  useEffect(() => {
    NicknameError &&
      setErrorMessage((data) => ({
        ...data,
        nickname: MESSAGE.SIGNUP.USED_NICKNAME,
      }));
  }, [NicknameError]);

  useEffect(() => {
    PhoneNumberError &&
      setErrorMessage((data) => ({
        ...data,
        phoneNumber: MESSAGE.SIGNUP.USED_PHONENUMBER,
      }));
  }, [PhoneNumberError]);

  useEffect(() => {
    EmailError &&
      setErrorMessage((data) => ({
        ...data,
        email: MESSAGE.SIGNUP.USED_EMAIL,
      }));
  }, [EmailError]);

  return (
    <>
      <Style.Form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
        <Style.ProfileImageContainer>
          <Style.ProfileImageLabel>
            <Style.ProfileImageInput
              type="file"
              name="profileImg"
              accept="image/*"
              onChange={handleImageUploadPreview}
            />
            <Style.ProfileImage src={imageSrc} alt="미리보기" />
            프로필 추가
          </Style.ProfileImageLabel>
          {profileImg && (
            <Style.XMarkIcon>
              <XMark onClick={imageDeleteClick} />
            </Style.XMarkIcon>
          )}
        </Style.ProfileImageContainer>
        <SignUpInput
          type="text"
          label="이름"
          placeholder="이름"
          name="realname"
          value={realname}
          onChange={handleChange}
          autoFocus
          required
        />
        <SignUpInput
          type="text"
          label="닉네임"
          errorMessage={errorMessage.nickname}
          placeholder="닉네임"
          name="nickname"
          value={nickname}
          onChange={handleChange}
          onBlur={() =>
            inputOnBlur(
              REGEXP.NICKNAME.test(nickname),
              IsValidNickname,
              'nickname',
              nickname,
              MESSAGE.SIGNUP.INVALID_NICKNAME
            )
          }
          required
        />
        <SignUpInput
          type="text"
          label="전화번호"
          errorMessage={errorMessage.phoneNumber}
          placeholder="전화번호"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleChange}
          onBlur={() =>
            inputOnBlur(
              REGEXP.PHONENUMBER.test(phoneNumber),
              IsValidPhoneNumber,
              'phoneNumber',
              phoneNumber,
              MESSAGE.SIGNUP.INVALID_PHONENUMBER
            )
          }
          maxLength="11"
          required
        />
        <SignUpInput
          type="email"
          label="이메일"
          errorMessage={errorMessage.email}
          placeholder="이메일"
          name="email"
          value={email}
          onChange={handleChange}
          onBlur={() =>
            inputOnBlur(
              REGEXP.EMAIL.test(email),
              IsValidEmail,
              'email',
              email,
              MESSAGE.SIGNUP.INVALID_EMAIL
            )
          }
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
};

export default SignUp;
