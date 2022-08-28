import { UserInformationContext } from 'providers/UserInformationProvider';
import { useContext } from 'react';

const useCheckMyPage = (id) => {
  const { userId } = useContext(UserInformationContext);
  return userId === Number(id);
};

export default useCheckMyPage;
