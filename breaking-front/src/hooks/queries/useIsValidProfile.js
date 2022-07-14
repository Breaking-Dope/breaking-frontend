import { getProfileValidation } from 'api/signUp';
import { useQuery } from 'react-query';

const useIsValidProfile = (validType, profileData, setErrorMessage) =>
  useQuery(
    ['validProfileData', { validType, profileData }],
    getProfileValidation,
    {
      enabled: false,
      retry: false,

      onSuccess: (data) => {
        console.log(data);
        setErrorMessage('');
      },

      onError: (error) => {
        const { code, message } = error.response.data;
        if (code === 'BSE500') return alert('서버 요청에 실패하였습니다');
        setErrorMessage(message);
      },
    }
  );

export default useIsValidProfile;
