import { getMissionPost } from 'api/breakingMission';
import { useNavigate } from 'react-router-dom';
import { PAGE_PATH } from 'constants/path';
import { useQuery } from 'react-query';

const useMissionPost = (missionId) => {
  const navigate = useNavigate();

  return useQuery(['missionPost', missionId], getMissionPost, {
    onError: (error) => {
      navigate(PAGE_PATH.ERROR);
    },
  });
};

export default useMissionPost;
