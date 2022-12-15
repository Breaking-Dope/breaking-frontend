import { postMissionPostWrite } from 'api/breakingMission';
import { PAGE_PATH } from 'constants/path';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

const useMissionPostWrite = () => {
  const navigate = useNavigate();
  return useMutation(postMissionPostWrite, {
    onSuccess: (res) => {
      alert('작성되었습니다.');
      navigate(PAGE_PATH.BREAKING_MISSION_POST(res.data.missionId));
    },
  });
};

export default useMissionPostWrite;
