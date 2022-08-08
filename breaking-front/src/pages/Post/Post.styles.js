import ReactLoading from 'react-loading';
import styled from 'styled-components';
import defaultThumbnail from 'assets/svg/default_thumbnail_image.svg';

export const Post = styled.div`
  width: 800px;
  margin: 0 auto;
  padding-top: 40px;
`;

export const DefaultCarousel = styled.div`
  display: flex;
  width: 800px;
  height: 400px;
  margin-bottom: 27px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.gray[200]};
  align-items: center;
  justify-content: center;
`;

export const DefaultThumbnailImage = styled.img.attrs({
  src: `${defaultThumbnail}`,
})``;

export const ContentHeader = styled.div`
  display: flex;
  min-height: 160px;
  padding: 20px;
  align-items: center;
`;

export const Context = styled.div`
  width: 500px;
  padding: 0px 30px;
  flex-grow: 1;
  button {
    margin: 5px 5px 5px 0px;
  }
`;

export const ContentWriter = styled.div`
  width: 100px;
  text-align: center;
`;

export const ContentWriterName = styled.p`
  margin-top: 5px;
  font-size: ${({ length }) => (length < 8 ? '16px' : '14px')};
`;

export const ContentTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
`;

export const ContentViewCount = styled.span`
  &::before {
    content: ' • ';
  }
`;

export const ContentPrice = styled.h1`
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 24px;
`;

export const ContentSoldCount = styled.span`
  margin-left: 4px;
  font-weight: 700;
`;

export const ContentDetail = styled.div`
  margin-top: 10px;
  color: ${({ theme }) => theme.gray[800]};
  font-size: 12px;
`;

export const ContentLocation = styled(ContentDetail)`
  display: flex;
  align-items: center;
`;

export const ContentPriceContainer = styled.div`
  width: 160px;
  text-align: center;
`;

export const ContentContainer = styled.div`
  margin-top: 20px;
`;

export const Content = styled.div`
  min-height: 100px;
  line-height: 1.5;
`;

export const Hashtag = styled.span`
  color: ${({ theme }) => theme.blue[900]};
  cursor: pointer;
`;

export const ContentFooter = styled.div`
  position: relative;
  display: flex;
  padding: 0px 10px;
  margin-top: 20px;
  justify-content: space-between;
  svg {
    outline: none;
    cursor: pointer;
  }
`;

export const ContentStatus = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  label {
    margin-right: 10px;
  }
  svg {
    margin-right: 5px;
    vertical-align: middle;
  }
`;

export const ContentToggle = styled.div`
  position: absolute;
  right: -60px;
  bottom: 30px;
`;

export const Comments = styled.div`
  width: 800px;
  margin-bottom: 30px;
`;

export const TargetDiv = styled.div`
  position: relative;
  height: 140px;
`;

export const Loading = styled(ReactLoading)`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -50%);
`;
