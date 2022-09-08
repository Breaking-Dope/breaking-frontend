import MissionTime from 'utils/MissionTime';

describe('MissionTime 테스트', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date('2022-01-01 02:00:00'));
  });
  test('미션이 시작 전일 때', () => {
    expect(
      MissionTime(
        new Date('2022-01-01 03:00:00'),
        new Date('2022-01-02 02:00:00')
      )
    ).toEqual(['미션 시작 전']);
  });

  test('미션이 진행 중일 때', () => {
    expect(
      MissionTime(
        new Date('2022-01-01 00:00:00'),
        new Date('2022-01-01 03:00:00')
      )
    ).toEqual(['미션 종료까지', '1시간 전']);
  });

  test('미션이 종료되었을 때', () => {
    expect(
      MissionTime(
        new Date('2022-01-01 00:00:00'),
        new Date('2022-01-01 01:00:00')
      )
    ).toEqual(['미션 종료']);
  });
});
