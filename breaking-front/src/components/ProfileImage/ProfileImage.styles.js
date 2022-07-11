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
    width: 250px;
    height: 250px;
  `,
};

export const ProfileImageContainer = styled.div`
  cursor: pointer;
`;

export const ProfileImage = styled.img`
  ${({ size }) => sizeCss[size]};
  border-radius: 50%;
`;

export const DefaultImage = styled.img.attrs({
  src: `${defaultImage}`,
})`
  ${({ size }) => sizeCss[size]};
  background-color: ${({ theme }) => theme.gray[300]};
  border-radius: 50%;
`;
