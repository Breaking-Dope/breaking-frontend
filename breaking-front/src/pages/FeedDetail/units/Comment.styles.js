import styled from 'styled-components';

export const Comment = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  background-color: ${({ theme }) => theme.gray[50]};
  border-radius: 10px;
`;

export const ContentContainer = styled.div`
  margin: 10px 20px;
  flex-grow: 1;
`;

export const Nickname = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Content = styled.p`
  padding-right: 30px;
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
  justify-content: space-between;
  margin-top: 20px;
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
  width: 750px;
  float: right;
`;
