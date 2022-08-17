import timeFormatter from 'utils/timeFormatter';

describe('timeFormatter 테스트', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date('2022-01-01 02:02:00'));
  });
  test('게시글 작성된지 1분 미만일때', () => {
    expect(timeFormatter(new Date('2022-01-01 02:01:30'))).toEqual('30초 전');
  });

  test('게시글 작성된지 1시간 미만일때', () => {
    expect(timeFormatter(new Date('2022-01-01 01:54:30'))).toEqual('7분 전');
    expect(timeFormatter(new Date('2022-01-01 01:31:30'))).toEqual('30분 전');
  });

  test('게시글 작성된지 1일 미만일때', () => {
    expect(timeFormatter(new Date('2022-01-01 00:54:30'))).toEqual('1시간 전');
    expect(timeFormatter(new Date('2021-12-31 12:54:30'))).toEqual('13시간 전');
  });

  test('게시글 작성된지 1달 미만일때', () => {
    expect(timeFormatter(new Date('2021-12-30 12:54:30'))).toEqual('1일 전');
    expect(timeFormatter(new Date('2021-12-10 12:54:30'))).toEqual('21일 전');
  });

  test('게시글 작성된지 1년 미만일때', () => {
    expect(timeFormatter(new Date('2021-04-30 12:54:30'))).toEqual('8달 전');
    expect(timeFormatter(new Date('2021-11-10 12:54:30'))).toEqual('1달 전');
  });

  test('게시글 작성된지 1년 이상일때', () => {
    expect(timeFormatter(new Date('2020-04-30 12:54:30'))).toEqual('1년 전');
    expect(timeFormatter(new Date('2011-11-10 12:54:30'))).toEqual('10년 전');
  });
});
