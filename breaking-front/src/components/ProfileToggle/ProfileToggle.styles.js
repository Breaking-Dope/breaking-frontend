import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProfileToggleContainer = styled.div`
  position: relative;
  display: inline-block;
  z-index: 99;
  margin-top: 20px;
`;

export const ArrowMark = styled.div`
  position: absolute;
  display: inline-block;
  z-index: 1;
  top: -12px;
  right: 30px;
  width: 25px;
  height: 25px;
  border: 1px solid ${({ theme }) => theme.black};
  border-width: 1px 0px 0px 1px;
  background-color: ${({ theme }) => theme.white};
  transform: rotate(45deg);
`;

export const ProfileToggle = styled.div`
  position: relative;
  width: 220px;
  padding: 15px 10px;
  border: 1px solid ${({ theme }) => theme.black};
  border-radius: 10px;
`;

export const LabelLink = styled(Link)`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export const LabelText = styled.label`
  margin-left: 5px;
  cursor: pointer;
`;

export const Transaction = styled.span`
  position: absolute;
  right: 20px;
  font-size: 12px;
  color: ${({ theme }) => theme.blue[900]};
  font-weight: 600;
  cursor: pointer;
`;

export const Logout = styled.p`
  margin-top: 10px;
  text-align: center;
  cursor: pointer;
`;
