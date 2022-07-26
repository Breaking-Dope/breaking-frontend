import styled from 'styled-components';

export const CommentForm = styled.form`
  display: flex;
  align-items: center;
  margin: 20px 10px;
`;

export const CommentInput = styled.input`
  margin: 0px 20px;
  padding-bottom: 5px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.gray[500]};
  outline: none;
  flex-grow: 1;
  &::placeholder {
    color: ${({ theme }) => theme.gray[500]};
  }
  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.gray[800]};
  }
`;

export const CommentButton = styled.button`
  border: none;
  background-color: inherit;
  color: ${({ theme }) => theme.blue[900]};
  cursor: pointer;
`;
