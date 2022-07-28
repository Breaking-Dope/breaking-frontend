import Button from 'components/Button/Button';
import styled from 'styled-components';

export const PostWriteTitle = styled.h3`
  font-size: 24px;
`;

export const PostRadioButton = styled(Button)`
  background-color: ${({ id, radioControl, theme }) =>
    id === radioControl && theme.blue[400]};
`;

export const PostSubmitButton = styled(Button)`
  display: block;
  width: 170px;
  margin: 0 auto 50px;
  background-color: ${({ theme }) => theme.blue[400]};
`;

export const Container = styled.div``;

export const BackPageIconContainer = styled.div`
  display: inline-block;
  margin-top: 30px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const OccurTimeLayout = styled.div`
  margin-top: 60px;
  > h3 {
    margin-bottom: 20px;
  }
`;

export const DatePicker = styled.input`
  position: relative;
  width: 230px;
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

export const FindLocationLayout = styled.div`
  display: inline-block;
  margin-left: 20px;
  cursor: pointer;
  > svg {
    width: 15px;
    height: 15px;
    vertical-align: middle;
    > path {
      stroke: ${({ theme }) => theme.blue[900]};
    }
  }
`;

export const FindLocationMessage = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.blue[900]};
  vertical-align: middle;
`;

export const LocationInput = styled.input`
  width: 470px;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 80px;
  border: solid 1px ${({ theme }) => theme.gray[500]};
  border-radius: 10px;
`;

export const ContextLayout = styled.div`
  margin-top: 60px;
  > * {
    margin-bottom: 40px;
  }
`;

export const TitleInput = styled.input`
  width: 100%;
  border: none;
  border-left: solid 3px ${({ theme }) => theme.gray[700]};
  font-size: 18px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-weight: 100;
    color: ${({ theme }) => theme.gray[400]};
  }
`;

export const BodyTextArea = styled.textarea`
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

export const HashTagInput = styled(TitleInput)`
  font-size: 12px;
  color: ${({ theme }) => theme.blue[900]};
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
