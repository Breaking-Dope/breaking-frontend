import Button from 'components/Button/Button';
import styled from 'styled-components';
import ReactLoading from 'react-loading';

export const OccurTimeLayout = styled.div`
  margin-top: 60px;
  > h3 {
    margin-bottom: 20px;
  }
`;
export const ContextLayout = styled.div`
  margin-top: 80px;
  margin-bottom: 40px;
  > * {
    margin-bottom: 40px;
  }
`;

export const LocationLayout = styled.div`
  margin-top: 60px;
`;

export const PostWriteTitle = styled.h3`
  font-size: 18px;
`;

export const DatePicker = styled.input`
  position: relative;
  width: 180px;
  margin-right: 10px;
  padding: 10px;
  border: solid 1px ${({ theme }) => theme.gray[500]};
  border-radius: 10px;
  &::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: auto;
    height: auto;
    background: transparent;
    color: transparent;
    cursor: pointer;
  }
`;

export const ContextTitleInput = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-left: solid 2px ${({ theme }) => theme.gray[700]};
  font-size: 24px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-weight: 100;
    color: ${({ theme }) => theme.gray[400]};
  }
`;

export const ContextBodyTextArea = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 10px;
  border: solid 1px ${({ theme }) => theme.gray[500]};
  border-radius: 10px;
  resize: none;
  &::placeholder {
    color: ${({ theme }) => theme.gray[400]};
  }
`;

export const PostSubmitButton = styled(Button)`
  display: block;
  width: 170px;
  margin: 0 auto 50px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.blue[500]};
`;

export const Loading = styled(ReactLoading)`
  display: block;
  margin: 0 auto 50px;
`;
