import React from 'react';
// import * as Style from 'pages/BreakingMission/MissionPostWrite/MissionPostWrite.styles';
import useInputs from 'hooks/useInputs';
import dayjs from 'dayjs';
import MissionWriteCommonForm, {
  MissionSubmitButton,
} from 'components/MissionWriteCommonForm/MissionWriteCommonForm';

const MissionPostWrite = () => {
  const [missionWriteData, onChangeMissionWriteData, setMissionWriteData] =
    useInputs({
      location: undefined,
      startTime: dayjs().format('YYYY-MM-DDTHH:mm'),
      endTime: dayjs().add(1, 'day').format('YYYY-MM-DDTHH:mm'),
      title: '',
      content: '',
    });

  return (
    <>
      <form>
        <MissionWriteCommonForm
          data={missionWriteData}
          onChangeData={onChangeMissionWriteData}
          setData={setMissionWriteData}
        />
        <MissionSubmitButton>미션 등록하기</MissionSubmitButton>
      </form>
    </>
  );
};

export default MissionPostWrite;
