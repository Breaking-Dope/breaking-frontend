import TimeFormatter from 'utils/TimeFormatter';

const MissionTime = (startDate, endDate) => {
  const currentDate = new Date();

  if (currentDate < startDate) return ['미션 시작 전'];
  else if (currentDate > startDate && currentDate < endDate) {
    const remainTime = TimeFormatter(
      new Date(currentDate - (endDate - currentDate))
    );
    return ['미션 종료까지', remainTime];
  } else if (currentDate > endDate) return ['미션 종료'];
};

export default MissionTime;
