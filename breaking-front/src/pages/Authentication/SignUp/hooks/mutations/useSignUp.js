import { postSignUp } from 'api/signUp';
import { PAGE_PATH } from 'constants/path';
import useJWTValidate from 'hooks/queries/useJWTValidate';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

const useSignUp = () => {
  const navigate = useNavigate();
  const { refetch: JWTValidateRefetch } = useJWTValidate();

  return useMutation(postSignUp, {
    onSuccess: (res) => {
      const jwtToken = res.headers.authorization;
      localStorage.setItem('access_token', jwtToken);
      JWTValidateRefetch();
      alert('환영합니다.');
      navigate(PAGE_PATH.HOME);
    },
    onError: () => {
      //에러 페이지 이동
    },
  });
};

export default useSignUp;
