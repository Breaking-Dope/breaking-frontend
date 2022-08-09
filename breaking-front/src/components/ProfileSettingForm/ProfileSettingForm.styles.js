import styled from 'styled-components';
import Button from 'components/Button/Button';
import ReactLoading from 'react-loading';

export const Form = styled.form`
  width: 600px;
  margin: 0 auto;
`;

export const ProfileImageContainer = styled.div`
  display: flex;
  height: 300px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ProfileImage = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;

export const LabelText = styled.p`
  margin-top: 20px;
  cursor: pointer;
`;

export const ProfileImageInput = styled.input`
  display: none;
`;

export const XMarkIcon = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

export const Role = styled.div`
  margin: 15px 0px 60px;
  > * {
    margin-right: 30px;
  }
`;

export const SubmitButton = styled(Button)`
  display: block;
  margin: 0 auto 60px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.blue[500]};
`;

export const Loading = styled(ReactLoading)`
  display: block;
  margin: 0 auto 60px;
`;
