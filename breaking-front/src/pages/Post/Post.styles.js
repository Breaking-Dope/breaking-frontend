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

export const ContentLocationContainer = styled.div`
  display: flex;
  color: ${({ theme }) => theme.gray[800]};
  font-size: 12px;
  align-items: center;
`;

export const ContentLocation = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const Dot = styled.span`
  margin: 0 3px;
  &:after {
    content: '•';
  }
`;

export const ContentCreatedDate = styled(ContentDetail)`
  margin-top: 0;
`;

export const ContentViewCount = styled.span``;

export const ContentPriceContainer = styled.div`
  width: 160px;
  text-align: center;
`;

export const ContentContainer = styled.div`
  margin-top: 20px;
`;

export const Content = styled.div`
  min-height: 100px;
`;

export const ContentFooter = styled.div`
  position: relative;
  display: flex;
  padding: 0px 5px;
  margin-top: 20px;
  justify-content: space-between;
  svg {
    margin-top: auto;
    outline: none;
    cursor: pointer;
  }
`;

export const ContentStatus = styled.div`
  font-size: 14px;
  label {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
  svg {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    vertical-align: middle;
  }
`;

export const Comments = styled.div`
  width: 800px;
`;

export const CommentCount = styled.div`
  margin-top: 20px;
  margin-left: 10px;
  font-size: 18px;
`;
