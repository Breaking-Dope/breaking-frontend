import ImageUrlConverter from 'utils/ImageUrlConverter';

describe('ImageUrlConverter 테스트', () => {
  test('개발 환경에서는 url이 그대로 반환된다', () => {
    process.env.NODE_ENV = 'development';
    expect(
      ImageUrlConverter(
        'https://cdn.pixabay.com/photo/2022/07/20/14/45/shipwreck-7334280_960_720.jpg'
      )
    ).toEqual(
      'https://cdn.pixabay.com/photo/2022/07/20/14/45/shipwreck-7334280_960_720.jpg'
    );
  });

  test('실제 환경에서는 base Url이 앞에 붙는다', () => {
    process.env.NODE_ENV = 'production';
    expect(
      ImageUrlConverter(
        'https://cdn.pixabay.com/photo/2022/07/20/14/45/shipwreck-7334280_960_720.jpg'
      )
    ).toEqual(
      'https://team-dope.link:8443https://cdn.pixabay.com/photo/2022/07/20/14/45/shipwreck-7334280_960_720.jpg'
    );
  });
});
