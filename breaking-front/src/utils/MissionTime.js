import TimeFormatter from 'utils/TimeFormatter';

const MissionTime = (startDate, endDate) => {
  const currentTime = new Date();

  if (currentTime < startDate) return ['미션 시작 전'];
  else if (currentTime > startDate && currentTime < endDate) {
    const remainTime = TimeFormatter(
      new Date(currentTime - (endDate - currentTime))
    );
    return ['미션 종료까지', remainTime];
  } else if (currentTime > endDate) return ['미션 종료'];
  else return;
};

export default MissionTime;
