import styled from 'styled-components';

export const ToggleContainer = styled.div`
  position: relative;
  display: inline-block;
  z-index: 99;
`;

export const ArrowMark = styled.div`
  position: absolute;
  display: inline-block;
  z-index: 1;
  top: -12px;
  right: 30px;
  width: 25px;
  height: 25px;
  border: 1px solid ${({ theme }) => theme.gray[500]};
  border-width: 1px 0px 0px 1px;
  background-color: ${({ theme }) => theme.white};
  transform: rotate(45deg);
`;

export const Toggle = styled.div`
  position: relative;
  width: ${({ width }) => width};
  padding: 15px 10px 5px;
  border: 1px solid ${({ theme }) => theme.gray[500]};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.white};
`;

export const LabelLink = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
`;

export const LabelText = styled.span`
  margin-left: 5px;
  cursor: pointer;
`;
