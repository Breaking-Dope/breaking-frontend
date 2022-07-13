import styled from 'styled-components';

export const FilterContainer = styled.div`
  position: absolute;
  display: inline-block;
  width: ${({ width }) => width};
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.gray[500]};
  background-color: ${({ theme }) => theme.white};
  cursor: pointer;
  z-index: 5;
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 35px;
`;

export const IconContainer = styled.span`
  position: absolute;
`;

export const Label = styled.label`
  display: ${({ hidden }) => (hidden ? 'none' : 'inline-block')};
  padding: 6px 0px;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    font-weight: 700;
  }
`;
