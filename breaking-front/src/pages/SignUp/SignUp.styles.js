import Button from 'components/Button/Button';
import styled from 'styled-components';

export const Form = styled.form``;

export const UserImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 250px;
`;

export const UserImage = styled.img`
  display: block;
  width: 160px;
  height: 160px;
  margin-bottom: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.gray[100]};
  object-fit: cover;
`;

export const UserImageLabel = styled.label`
  cursor: pointer;
`;

export const UserImageInput = styled.input`
  display: none;
`;

export const XMarkIcon = styled.span`
  position: absolute;
  top: 20px;
  right: 40%;
  cursor: pointer;
`;

export const Role = styled.div`
  margin: 15px 0px 30px;
  > * {
    margin-right: 30px;
  }
`;

export const SubmitButton = styled(Button)`
  display: block;
  margin: 0 auto;
  color: ${({ theme }) => theme.white};
`;
