import { deleteProfileWithdrawal } from 'api/profile';
import { PAGE_PATH } from 'constants/path';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

const useProfileWithdrawal = () => {
  const navigate = useNavigate();

  return useMutation(deleteProfileWithdrawal, {
    onSuccess: () => {
      alert('탈퇴 완료되었습니다.');
      navigate(PAGE_PATH.HOME);
    },
  });
};

export default useProfileWithdrawal;
