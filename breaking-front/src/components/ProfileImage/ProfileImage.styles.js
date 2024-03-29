import styled, { css } from 'styled-components';
import defaultImage from 'assets/svg/default_profile_image.svg';

const sizeCss = {
  small: css`
    width: 40px;
    height: 40px;
  `,
  medium: css`
    width: 51px;
    height: 51px;
  `,
  large: css`
    width: 100px;
    height: 100px;
  `,
  xlarge: css`
    width: 200px;
    height: 200px;
  `,
};

export const ProfileImageContainer = styled.div``;

export const ProfileImage = styled.img`
  display: block;
  ${({ size }) => sizeCss[size]};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.gray[200]};
  text-align: center;
  word-wrap: break-word;
  object-fit: cover;
  overflow: hidden;
  cursor: pointer;
`;

export const DefaultImage = styled.img.attrs({
  src: `${defaultImage}`,
})`
  display: block;
  ${({ size }) => sizeCss[size]};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.gray[200]};
  text-align: center;
  word-wrap: break-word;
  overflow: hidden;
  cursor: ${({ isAnonymous }) => (isAnonymous ? 'default' : 'pointer')};
`;
