import ExtractHashtag from 'utils/ExtractHashtag';

describe('ExtractHashtag 테스트 코드를 작성한다.', () => {
  test('해시태그가 없으면 undefined를 return해야한다.', () => {
    expect(ExtractHashtag('해시태그가 없는 글 입니다.')).toEqual(undefined);
  });
  test('해시태그가 있으면 해시태그를 추출한다.', () => {
    expect(
      ExtractHashtag('#해시태그 #띄어쓰기는 추출이 안됨 #하나 #둘')
    ).toEqual(['해시태그', '띄어쓰기는', '하나', '둘']);
  });
});
