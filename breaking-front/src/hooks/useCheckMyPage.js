import { UserInformationContext } from 'providers/UserInformationProvider';
import { useContext } from 'react';

const useCheckMyPage = (id) => {
  const { userId } = useContext(UserInformationContext);
  return userId === id;
};

export default useCheckMyPage;
