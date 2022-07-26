import styled from 'styled-components';

export const Comment = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  margin-bottom: ${({ isReply }) => (isReply ? '0px' : '10px')};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.gray[50]};
  align-items: center;
`;

export const ContentContainer = styled.div`
  margin: 10px 20px;
  flex-grow: 1;
`;

export const Nickname = styled.h3`
  margin-bottom: 3px;
  font-size: 16px;
`;
export const CreatedTime = styled.p`
  margin-bottom: 10px;
  font-size: 10px;
  color: ${({ theme }) => theme.gray[700]};
`;
export const Content = styled.p`
  padding-right: 30px;
  font-size: 14px;
`;

export const Status = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  label {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
  svg {
    margin-right: 5px;
  }
`;

export const CommentFooter = styled.div`
  position: relative;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  svg,
  span {
    cursor: pointer;
  }
`;

export const CommentToggle = styled.div`
  position: absolute;
  right: -70px;
  bottom: 30px;
`;

export const AddComment = styled.div`
  margin-left: auto;
  width: 750px;
`;

export const ReplyCount = styled.div`
  display: flex;
  margin-left: 75px;
  align-items: center;
  color: ${({ theme }) => theme.blue[900]};
  cursor: pointer;
`;

export const Reply = styled.div`
  margin-left: auto;
  width: 750px;
`;
