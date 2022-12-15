import React from 'react';
// import * as Style from 'pages/BreakingMission/MissionPostWrite/MissionPostWrite.styles';
import useInputs from 'hooks/useInputs';
import dayjs from 'dayjs';
import MissionWriteCommonForm, {
  MissionSubmitButton,
} from 'components/MissionWriteCommonForm/MissionWriteCommonForm';
import useMissionPostWrite from 'pages/BreakingMission/MissionPostWrite/hooks/mutations/useMissionWrite';
import MESSAGE from 'constants/message';

const MissionPostWrite = () => {
  const [missionWriteData, onChangeMissionWriteData, setMissionWriteData] =
    useInputs({
      location: undefined,
      startTime: dayjs().format('YYYY-MM-DDTHH:mm'),
      endTime: dayjs().add(1, 'day').format('YYYY-MM-DDTHH:mm'),
      title: '',
      content: '',
    });
  const { mutate, isLoading } = useMissionPostWrite();
  const MissionPostWriteSubmit = (event) => {
    event.preventDefault();
    if (!missionWriteData.location) {
      alert(MESSAGE.MISSION_POST_WRITE.LOCATION_BLANK);
      return;
    } else if (missionWriteData.title === '') {
      alert(MESSAGE.MISSION_POST_WRITE.TITLE_BLANK);
      return;
    } else if (missionWriteData.content === '') {
      alert(MESSAGE.MISSION_POST_WRITE.CONTENT_BLANK);
      return;
    }
    mutate(missionWriteData);
  };
  return (
    <>
      <form onSubmit={MissionPostWriteSubmit}>
        <MissionWriteCommonForm
          data={missionWriteData}
          onChangeData={onChangeMissionWriteData}
          setData={setMissionWriteData}
        />
        <MissionSubmitButton isMutateLoading={isLoading}>
          미션 등록하기
        </MissionSubmitButton>
      </form>
    </>
  );
};

export default MissionPostWrite;
