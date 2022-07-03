import { postSignUp } from 'api/signUp';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import useIsValidEmail from 'hooks/useIsValidEmail';
import useIsValidNickname from 'hooks/useIsValidNickname';
import useIsValidPhoneNumber from 'hooks/useIsValidPhoneNumber';
import React, { useRef, useState } from 'react';
import { useMutation } from 'react-query';
import {
  UserImage,
  UserImageContainer,
  UserImageInput,
} from 'pages/SignUp/SignUp.styles';
import defaultProfileImage from 'assets/svg/default-profile-image.svg';
import fileToBase64 from 'utils/fileToBase64';

const SignUp = () => {
  const [profileImg, setProfileImg] = useState('');
  const [inputs, setInputs] = useState({
    nickname: '',
    phoneNumber: '',
    statusMessage: '',
    email: '',
    role: 'USER',
  });

  const [isValid, setIsValid] = useState({
    nickname: false,
    phoneNumber: false,
    email: false,
  });

  const [imageSrc, setImageSrc] = useState(defaultProfileImage);

  const imageInput = useRef();

  const { nickname, phoneNumber, statusMessage, email, role } = inputs;

  const IsValidNickname = useIsValidNickname(setIsValid);
  const IsValidPhoneNumber = useIsValidPhoneNumber(setIsValid);
  const IsValidEmail = useIsValidEmail(setIsValid);

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

  const handleChange = (event) => {
    let { name, value } = event.target;
    if (name in isValid) setIsValid({ ...isValid, [name]: false });

    //전화번호는 숫자만 입력 가능하도록 설정
    if (name === 'phoneNumber') {
      value = value.replace(/[^0-9]/g, '');
    }
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const SignUp = useMutation(postSignUp, {
    onSuccess: (res) => {
      console.log('가입 성공');
      //메인 페이지 이동
    },
    onError: () => {
      //에러 페이지 이동
    },
  });

  const handleSubmit = () => {
    const formData = new FormData();

    for (const [key, value] of Object.entries(isValid)) {
      if (value === false) {
        if (key === 'email' && role === 'USER') continue;

        console.log(`${key} 중복 확인 해주시기 바랍니다.`);
        return;
      }
    }

    if (profileImg !== '') formData.append('profileImg', profileImg);
    formData.append('signUpRequest', JSON.stringify(inputs));

    SignUp.mutate(formData);
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <p>프로필 사진</p>
        <UserImageContainer>
          <UserImage src={imageSrc} alt="미리보기" />
          <UserImageInput
            ref={imageInput}
            type="file"
            name="profileImg"
            accept="image/*"
            onChange={handleImageUploadPreview}
          />
          <Button type="button" onClick={() => imageInput.current.click()}>
            이미지 추가
          </Button>
          <Button onClick={imageDeleteClick}>기본 이미지로 변경</Button>
        </UserImageContainer>
        <p>닉네임</p>
        <Input
          type="text"
          name="nickname"
          value={nickname}
          onChange={handleChange}
          onBlur={() => {
            IsValidNickname.mutate({ nickname });
          }}
          maxLength="8"
        />
        <br />
        <p>전화번호</p>
        <Input
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleChange}
          onBlur={() => {
            IsValidPhoneNumber.mutate({ phoneNumber });
          }}
        />
        <br />
        <p>상태메시지</p>
        <Input
          type="text"
          name="statusMessage"
          value={statusMessage}
          onChange={handleChange}
          maxLength="30"
        />
        <br />
        <p>회원 유형</p>
        <Button
          type="button"
          onClick={() => setInputs({ ...inputs, role: 'USER' })}
        >
          일반인
        </Button>
        <Button
          type="button"
          onClick={() => setInputs({ ...inputs, role: 'PRESS' })}
        >
          언론인
        </Button>
        {role === 'PRESS' ? (
          <>
            <p>이메일</p>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              onBlur={() => {
                IsValidEmail.mutate({ email });
              }}
            />
          </>
        ) : null}
        <br />
        <Button type="button" onClick={handleSubmit}>
          회원가입
        </Button>
      </form>
    </>
  );
};

export default SignUp;
