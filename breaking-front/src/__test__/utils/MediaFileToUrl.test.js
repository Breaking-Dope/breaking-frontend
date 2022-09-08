import MediaFileToUrl from 'utils/MediaFileToUrl';

describe('MediaFileToUrl 테스트 코드를 작성한다.', () => {
  global.URL.createObjectURL = jest.fn();
  test('이미지 파일일 때 type이 image이다.', () => {
    const imageFile = new File(['hello'], 'hello.png', { type: 'image/png' });
    expect(MediaFileToUrl(imageFile).type).toEqual('image');
  });
  test('동영상 파일일 때 type이 video이다.', () => {
    const videoFile = new File(['hello'], 'hello.mp4', { type: 'video/mp4' });
    expect(MediaFileToUrl(videoFile).type).toEqual('video');
  });
});
