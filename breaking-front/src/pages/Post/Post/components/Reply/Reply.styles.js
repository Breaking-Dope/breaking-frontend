import styled from 'styled-components';

export const Reply = styled.div`
  position: relative;
  width: 730px;
  margin-left: auto;
  margin-bottom: 40px;
  min-height: 100px;
`;

export const MoreShowReply = styled.div`
  position: absolute;
  display: inline-flex;
  bottom: -25px;
  left: 80px;
  color: ${({ theme }) => theme.blue[900]};
  font-size: 14px;
  align-items: center;
  cursor: pointer;
  svg {
    margin-right: 3px;
    vertical-align: bottom;
  }
`;
