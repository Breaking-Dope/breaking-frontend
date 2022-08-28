import LikeCount from 'utils/LikeCount';

describe('LikeCount 테스트', () => {
  test('좋아요 개수가 undefined면 빈 값을 return한다.', () => {
    expect(LikeCount(undefined, undefined)).toEqual();
  });
  test('좋아요 개수가 0일 때', () => {
    expect(LikeCount(undefined, 0)).toEqual('좋아요를 눌러보세요.');
  });
  test('닉네임이 undefined고 좋아요 개수가 존재할 때', () => {
    expect(LikeCount(undefined, 1)).toEqual('1');
  });
  test('닉네임이 존재하고 좋아요 개수가 1일 때', () => {
    expect(LikeCount('주기', 1)).toEqual('주기님이 좋아합니다.');
  });
  test('닉네임이 존재하고 좋아요 개수가 2 이상일 때', () => {
    expect(LikeCount('주기', 10000)).toEqual('주기님 외 9,999명');
  });
});
