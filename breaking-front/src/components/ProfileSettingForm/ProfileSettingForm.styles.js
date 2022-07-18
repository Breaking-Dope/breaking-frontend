import Button from 'components/Button/Button';
import styled from 'styled-components';

export const Form = styled.form`
  width: 600px;
  margin: 0 auto;
`;

export const ProfileImageContainer = styled.div`
  position: relative;
  display: flex;
  height: 300px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
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
  top: 30px;
  right: 30%;
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
  margin: 0 auto;
  margin-bottom: 60px;
  color: ${({ theme }) => theme.white};
`;
