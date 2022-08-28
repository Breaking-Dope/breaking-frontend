import styled from 'styled-components';

export const CommentToggle = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  right: -70px;
  bottom: 20px;
`;
