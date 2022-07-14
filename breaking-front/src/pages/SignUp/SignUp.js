import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { postSignUp } from 'api/signUp';
import Button from 'components/Button/Button';
import SignUpInput from 'components/SignUpInput/SignUpInput';
import useIsValidProfile from 'hooks/queries/useIsValidProfile';
import useInputs from 'hooks/useInputs';
import { PATH } from 'constants/path';
import fileToBase64 from 'utils/fileToBase64';
import { ReactComponent as XMark } from 'assets/svg/x-mark.svg';
import defaultProfileImage from 'assets/svg/default-profile-image.svg';
import * as Style from 'pages/SignUp/SignUp.styles';

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [imageSrc, setImageSrc] = useState(defaultProfileImage);
  const [profileImg, setProfileImg] = useState('');
  const [
    { realName, nickname, phoneNumber, statusMsg, email, role },
    handleChange,
    setForm,
  ] = useInputs({
    realName: '',
    nickname: '',
    phoneNumber: '',
    email: '',
    statusMsg: '',
    role: 'USER',
  });

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
    setProfileImg(imageFile);

    fileToBase64(imageFile, setImageSrc);
  };

  const imageDeleteClick = () => {
    if (imageSrc !== defaultProfileImage) {
      setImageSrc(defaultProfileImage);
      setProfileImg('');
    }
  };

  const SignUp = useMutation(postSignUp, {
    onSuccess: (res) => {
      const jwtToken = res.headers.authorization;
      localStorage.setItem('access_token', jwtToken);
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

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nicknameErrorMessage)
      return alert('닉네임을 올바르게 기입해주시기바랍니다.');
    else if (phoneNumberErrorMessage)
      return alert('전화번호를 올바르게 기입해주시기 바랍니다.');
    else if (emailErrorMessage)
      return alert('이메일을 올바르게 기입해주시기 바랍니다.');

    const formData = new FormData();

    const userData = {
      username: location.state.username,
      realName,
      nickname,
      phoneNumber,
      email,
      statusMsg,
      role,
    };

    if (profileImg !== '') formData.append('profileImg', profileImg);
    formData.append('signUpRequest', JSON.stringify(userData));

    SignUp.mutate(formData);
  };

  useEffect(() => {
    //유저가 sns 로그인하지않고 회원가입 페이지로 들어왔을 때 처리
    if (!location.state) {
      alert('SNS 로그인 후 회원가입이 가능함니다.');
      navigate(PATH.LOGIN);
    }
  }, []);

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
          name="realName"
          placeholder="이름"
          label="이름"
          value={realName}
          onChange={handleChange}
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
            NicknameReFetch();
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
            PhoneNumberReFetch();
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
            EmailReFetch();
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
};

export default SignUp;
