import Button from 'components/Button/Button';
import styled from 'styled-components';
import ReactLoading from 'react-loading';

export const PostWriteTitle = styled.h3`
  font-size: 18px;
`;

export const PostSubmitButton = styled(Button)`
  display: block;
  width: 170px;
  margin: 0 auto 50px;
  background-color: ${({ theme }) => theme.blue[400]};
`;

export const Container = styled.div`
  width: 800px;
  margin: 60px auto;
`;

export const OccurTimeLayout = styled.div`
  margin-top: 60px;
  > h3 {
    margin-bottom: 20px;
  }
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

export const LocationLayout = styled.div`
  margin-top: 60px;
`;

export const ContextLayout = styled.div`
  margin-top: 80px;
  margin-bottom: 40px;
  > * {
    margin-bottom: 40px;
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

export const PostTypeLayout = styled.div`
  margin-top: 40px;
  > button {
    margin-right: 30px;
  }
  > * {
    margin-bottom: 30px;
  }
`;

export const PriceLayout = styled.div`
  display: ${({ postType }) => (postType === 'free' ? 'none' : 'block')};
  margin-top: 40px;
  > * {
    margin-bottom: 30px;
  }
`;

export const PostPriceInput = styled.input`
  padding: 10px;
  border: solid 1px ${({ theme }) => theme.gray[500]};
  border-radius: 10px;
  font-size: 16px;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const AnonymousLayout = styled.div`
  margin-top: 40px;
  > button {
    margin-right: 30px;
  }
  > * {
    margin-bottom: 30px;
  }
`;

export const Loading = styled(ReactLoading)`
  display: block;
  margin: 0 auto 50px;
`;
