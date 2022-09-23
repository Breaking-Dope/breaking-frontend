import styled from 'styled-components';

export const MissionPost = styled.div`
  width: 900px;
  margin: 0 auto;
  padding-top: 40px;
`;

export const TimeBox = styled.div`
  padding: 30px;
  border: 2px solid
    ${({ theme, time }) => (time ? theme.blue[900] : theme.gray[800])};
  border-radius: 10px;
  color: ${({ theme, time }) => (time ? theme.black : theme.gray[800])};
  font-weight: bold;
  text-align: center;
  white-space: pre-wrap;
`;

export const MissionText = styled.p`
  margin-bottom: 10px;
  font-size: 24px;
`;

export const MissionTime = styled.span`
  color: ${({ theme }) => theme.red[500]};
`;

export const MissionDate = styled.p``;

export const ContentHeader = styled.div`
  display: flex;
  min-height: 150px;
  padding: 20px;
  padding-bottom: 10px;
  align-items: center;
`;

export const ContentWriter = styled.div`
  width: 100px;
  text-align: center;
`;

export const ContentWriterName = styled.p`
  margin-top: 5px;
  font-size: ${({ length }) => (length < 8 ? '16px' : '14px')};
`;

export const Context = styled.div`
  width: 500px;
  padding: 0px 30px;
  flex-grow: 1;
  button {
    margin: 5px 5px 5px 0px;
  }
`;

export const ContextTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
`;

export const ContextLocationContainer = styled.div`
  display: flex;
  color: ${({ theme }) => theme.gray[800]};
  font-size: 12px;
  align-items: center;
`;

export const ContextLocation = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const Dot = styled.span`
  margin: 0 3px;
  &:after {
    content: '•';
  }
`;

export const ContextViewCount = styled.span``;

export const ContextCreatedDate = styled.div`
  margin-top: 10px;
  color: ${({ theme }) => theme.gray[800]};
  font-size: 12px;
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
  justify-content: end;
  svg {
    margin-top: auto;
    outline: none;
    cursor: pointer;
  }
`;
