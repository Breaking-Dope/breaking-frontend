import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
`;
export const Icon = styled.div`
  position: absolute;
  top: 11px;
  right: 14px;
  z-index: 1;
  width: 16px;
  height: 100%;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0px 40px 0px 10px;
  border: none;
  border-radius: 10px;
  background-color: #f4f4f4;
  font-size: 12px;
  &:focus {
    outline: none;
  }
`;
