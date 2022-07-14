import Button from 'components/Button/Button';
import styled from 'styled-components';

export const Form = styled.form`
  width: 600px;
  margin: 0 auto;
`;

export const ProfileImageContainer = styled.div`
  position: relative;
  display: flex;
  height: 250px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ProfileImage = styled.img`
  display: block;
  width: 160px;
  height: 160px;
  margin-bottom: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.gray[100]};
  object-fit: cover;
`;

export const ProfileImageLabel = styled.label`
  cursor: pointer;
`;

export const ProfileImageInput = styled.input`
  display: none;
`;

export const XMarkIcon = styled.span`
  position: absolute;
  top: 20px;
  right: 35%;
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
