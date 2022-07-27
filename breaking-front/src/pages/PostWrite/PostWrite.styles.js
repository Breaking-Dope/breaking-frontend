import Button from 'components/Button/Button';
import styled, { css } from 'styled-components';

export const PostWriteTitle = styled.h3`
  font-size: 24px;
`;

export const PostRadioButton = styled(Button)`
  ${({ id, radioContorl }) =>
    id === radioContorl &&
    css`
      background-color: ${({ theme }) => theme.blue[400]};
    `}
`;

export const PostSubmitButton = styled(Button)`
  display: block;
  width: 170px;
  margin: 0 auto 50px;
  background-color: ${({ theme }) => theme.blue[400]};
`;

export const Container = styled.div``;

export const BackPageIconContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const OccurTimeLayOut = styled.div`
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
  ::-webkit-calendar-picker-indicator {
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

export const LocationLayOut = styled.div`
  margin-top: 60px;
`;

export const FindLocationLayOut = styled.div`
  display: inline-block;
  margin-left: 20px;
  cursor: pointer;
  > svg {
    vertical-align: middle;
    width: 15px;
    height: 15px;
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

export const LocationInputContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 80px;
`;

export const LocationInput = styled.input`
  width: 470px;
  padding: 10px;
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
  ::placeholder {
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
  ::placeholder {
    color: ${({ theme }) => theme.gray[400]};
  }
`;

export const HashTagInput = styled(TitleInput)`
  font-size: 12px;
  color: ${({ theme }) => theme.blue[900]};
`;

export const PostTypeLayOut = styled.div`
  margin-top: 40px;
  > button {
    margin-right: 30px;
  }
  > * {
    margin-bottom: 30px;
  }
`;

export const PriceLayOut = styled.div`
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
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const AnonymousLayOut = styled.div`
  margin-top: 40px;
  > button {
    margin-right: 30px;
  }
  > * {
    margin-bottom: 30px;
  }
`;
