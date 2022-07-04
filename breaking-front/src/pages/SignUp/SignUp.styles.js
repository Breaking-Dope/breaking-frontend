import styled from 'styled-components';

export const UserImageContainer = styled.div``;

export const UserImageInput = styled.input`
  display: none;
`;

export const UserImage = styled.img`
  width: 200px;
  height: 200px;
  background-color: ${({ theme }) => theme.gray[100]};
  border-radius: 50%;
  object-fit: cover;
`;
