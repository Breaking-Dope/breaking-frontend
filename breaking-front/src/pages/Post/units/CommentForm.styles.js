import styled from 'styled-components';

export const CommentForm = styled.form`
  display: flex;
  width: 100%;
  margin: 20px 10px 0px;
  flex-direction: column;
`;

export const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const ProfileImageContainer = styled.div`
  margin-bottom: auto;
`;

export const CommentTextarea = styled.textarea`
  height: 27px;
  margin: 0px 20px;
  padding-bottom: 5px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.gray[500]};
  flex-grow: 1;
  overflow: hidden;
  outline: none;
  resize: none;
  white-space: pre-line;
  &::placeholder {
    color: ${({ theme }) => theme.gray[500]};
  }
  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.gray[800]};
  }
`;

export const CommentFormFooter = styled.div`
  display: flex;
  padding: 0px 10px;
  justify-content: flex-end;
`;

export const CommentButton = styled.button`
  border: none;
  background-color: inherit;
  font-size: 14px;
  color: ${({ theme }) => theme.blue[900]};
  cursor: pointer;
`;
