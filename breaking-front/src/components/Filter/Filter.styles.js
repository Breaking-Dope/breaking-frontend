import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  z-index: 5;
  width: ${({ width }) => width};
  box-sizing: border-box;
  cursor: pointer;
`;

export const Label = styled.label`
  margin-left: 24px;
  padding: 5px;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    font-weight: 700;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
`;

export const ClosedFilter = styled.div`
  display: flex;
  padding: 3px;
  width: ${({ width }) => width};
  border: 1px solid ${({ theme }) => theme.gray[500]};
  background-color: ${({ theme }) => theme.white};
`;

export const OpenedFilter = styled(ClosedFilter)`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: absolute;
  z-index: 6;
  flex-direction: column;
`;
