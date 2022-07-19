import styled, { css } from 'styled-components';

const colorCss = {
  primary: css`
    color: ${({ theme }) => theme.blue[900]};
    background-color: ${({ isSelected, theme }) =>
      isSelected ? theme.blue[400] : theme.blue[300]};
    &:active :enabled {
      background-color: ${({ theme }) => theme.blue[400]};
    }
  `,
  secondary: css`
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.gray[500]};
  `,
  dark: css`
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.gray[700]};
  `,
  danger: css`
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.red[300]};
  `,
};

const sizeCss = {
  small: css`
    padding: 4px 8px;
    font-size: 8px;
  `,
  medium: css`
    padding: 15px;
    font-size: 18px;
  `,
  large: css`
    padding: 20px 50px;
    font-size: 18px;
  `,
  follow: css`
    padding: 10px 15px;
    font-size: 18px;
  `,
};

const roundCss = {
  none: css`
    border-radius: none;
  `,
  round: css`
    border-radius: 10px;
  `,
  rounder: css`
    border-radius: 15px;
  `,
};

export const Button = styled.button`
  border: none;
  font-weight: 700;
  cursor: pointer;

  ${({ color }) => colorCss[color]}
  ${({ size }) => sizeCss[size]}
  ${({ round }) => roundCss[round]}

  &:disabled {
    cursor: default;
  }
`;
