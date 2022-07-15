import styled, { css } from 'styled-components';
import defaultImage from 'assets/svg/default-profile-image.svg';

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
  ${({ size }) => sizeCss[size]};
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

export const DefaultImage = styled.img.attrs({
  src: `${defaultImage}`,
})`
  ${({ size }) => sizeCss[size]};
  border-radius: 50%;
  cursor: pointer;
`;
