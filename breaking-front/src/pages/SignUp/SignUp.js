import {
  postEmailValidation,
  postNicknameValidation,
  postPhoneNumberValidation,
  postSignUp,
} from 'api/signUp';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import React, { useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { UserImage, UserImageContainer, UserImageInput } from './SignUp.styles';

const SignUp = () => {
  const defaultProfileImage =
    'https://cdn.pixabay.com/photo/2016/09/28/02/14/user-1699635_960_720.png';
  const [inputs, setInputs] = useState({
    profileImgURL: defaultProfileImage, //default 값을 기본 프로필 이미지로 설정
    nickname: '',
    phoneNumber: '',
    statusMessage: '',
    email: '',
    role: 'USER', //default 값을 일반인으로 설정
  });

  const [isValid, setIsValid] = useState({
    nickname: false,
    phoneNumber: false,
    email: false,
  });

  const [imageSrc, setImageSrc] = useState(defaultProfileImage);
  const imageInput = useRef();

  const { nickname, phoneNumber, statusMessage, email, role } = inputs;

  const imagePreview = (imageFile) => {
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];

    setInputs({
      ...inputs,
      profileImgURL: imageFile,
    });

    imagePreview(imageFile);
  };

  const imageDeleteClick = () => {
    //기본 이미지가 아닐 때에만 실행
    if (imageSrc !== defaultProfileImage) {
      setImageSrc(defaultProfileImage);
      setInputs({
        ...inputs,
        profileImgURL: defaultProfileImage,
      });
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

  const signUp = useMutation(postSignUp, {
    onSuccess: (res) => {
      console.log('가입 성공');
      //메인 페이지 이동
    },
    onError: () => {
      //에러 페이지 이동
    },
  });

  const IsValidNickname = useMutation(postNicknameValidation, {
    onSuccess: (res) => {
      console.log('사용가능한 닉네임입니다.');
      setIsValid({ ...isValid, nickname: true });
    },
    onError: (error) => {
      console.log('이미 사용하고 있는 닉네임입니다.');
      setIsValid({ ...isValid, nickname: false });
    },
  });

  const IsValidPhoneNumber = useMutation(postPhoneNumberValidation, {
    onSuccess: (res) => {
      console.log('사용가능한 전화번호입니다.');
      setIsValid({ ...isValid, phoneNumber: true });
    },
    onError: (error) => {
      const { message } = error.response.data;
      console.log(message);

      if (message) console.log('이미 등록된 전화번호입니다.');
      else console.log('전화번호 형식이 아닙니다.');
      setIsValid({ ...isValid, phoneNumber: false });
    },
  });

  const IsValidEmail = useMutation(postEmailValidation, {
    onSuccess: (res) => {
      console.log('사용가능한 이메일입니다.');
      setIsValid({ ...isValid, email: true });
    },
    onError: (error) => {
      const { message } = error.response.data;
      console.log(message);

      if (message) console.log('사용가능한 이메일이 아닙니다.');
      else console.log('이메일 형식이 아닙니다.');
      setIsValid({ ...isValid, email: false });
    },
  });

  const handleSubmit = () => {
    const formData = new FormData();
    for (const [key, value] of Object.entries(inputs)) {
      formData.append(key, value);
    }

    for (const [key, value] of Object.entries(isValid)) {
      if (value === false) {
        if (key === 'email' && role === 'USER') continue;

        console.log(`${key} 중복 확인 해주시기 바랍니다.`);
        return;
      }
    }
    signUp.mutate(formData);
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
          {imageSrc && <UserImage src={imageSrc} alt="미리보기" />}
          <UserImageInput
            ref={imageInput}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
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
          maxLength="8"
        />
        <Button
          type="button"
          onClick={() => {
            IsValidNickname.mutate({ nickname });
          }}
        >
          중복 확인
        </Button>
        <br />
        <p>전화번호</p>
        <Input
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleChange}
        />
        <Button
          type="button"
          onClick={() => {
            IsValidPhoneNumber.mutate({ phoneNumber });
          }}
        >
          중복 확인
        </Button>
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
            />
            <Button
              type="button"
              onClick={() => {
                IsValidEmail.mutate({ email });
              }}
            >
              중복 확인
            </Button>
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
