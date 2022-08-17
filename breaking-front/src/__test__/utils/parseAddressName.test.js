import parseAddressName from 'utils/parseAddressName';

describe('parseAddressName 테스트', () => {
  test('세부주소 string을 넘겨주면 시/도 시군구 객체로 반환한다.', () => {
    expect(parseAddressName('서울 중구 장충동 2가 산 14-102')).toEqual({
      region_1depth_name: '서울',
      region_2depth_name: '중구',
    });
  });
});
