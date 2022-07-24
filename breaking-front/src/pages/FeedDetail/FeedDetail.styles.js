import styled from 'styled-components';

export const FeedDetail = styled.div`
  position: relative;
  width: 800px;
  margin: 0 auto;
  padding-top: 40px;
`;

export const BackIconContainer = styled.div`
  position: absolute;
  left: -60px;
  cursor: pointer;
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  min-height: 160px;
  margin-top: 20px;
  padding: 20px;
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

export const ContentWriterName = styled.h3`
  margin-top: 5px;
  font-size: 18px;
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

export const HashtagContainer = styled.div`
  margin-top: 30px;
`;

export const Hashtag = styled.span`
  margin-right: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.blue[900]};
`;
export const ContentFooter = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
  margin-top: 20px;
  svg {
    cursor: pointer;
  }
`;

export const ContentStatus = styled.div`
  display: flex;
  label {
    display: flex;
    align-items: center;
    margin-right: 10px;
    font-size: 12px;
  }
  svg {
    margin-right: 5px;
  }
`;

export const ContentToggle = styled.div`
  position: absolute;
  right: -60px;
  bottom: 30px;
`;

export const Comments = styled.div`
  width: 800px;
`;

export const Reply = styled.div`
  width: 750px;
  float: right;
`;
