import numberFormatter from 'utils/numberFormatter';

describe('numberFormatter 테스트 생략되는 값은 반올림이 된다.', () => {
  test('1000이하이면 숫자가 그대로 반환된다', () => {
    expect(numberFormatter(13)).toEqual(13);
  });

  test('1,000이상 10,000이하이면 0.0천 형식으로 구분한다', () => {
    expect(numberFormatter(1234)).toEqual('1.2천');
  });

  test('10,000이상 10,000,000이하이면 0000.0만 형식으로 구분한다', () => {
    expect(numberFormatter(12345678)).toEqual('1234.6만');
  });

  test('10,000,000이상이면 0000.0억 형식으로 구분한다', () => {
    expect(numberFormatter(123456789000)).toEqual('1234.6억');
  });
});
