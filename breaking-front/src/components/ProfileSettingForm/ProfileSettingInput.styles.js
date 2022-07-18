import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  position: relative;
  padding-bottom: 40px;
`;

export const LabelText = styled.span`
  font-size: 16px;
`;

export const ProfileSettingInput = styled.input`
  width: 100%;
  height: 56px;
  margin-top: 15px;
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.gray[200]};
  font-size: 12px;
  outline: none;
`;

export const Message = styled.p`
  position: absolute;
  margin: 5px;
  color: ${({ theme }) => theme.red[900]};
  font-size: 12px;
`;
