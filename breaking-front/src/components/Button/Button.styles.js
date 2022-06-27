import styled, { css } from 'styled-components';

const colorCss = {
  primary: css`
    color: #014d91;
    background-color: #cdddea;
    &:active {
      background-color: #b0ddff;
    }
  `,
  secondary: css`
    color: #ffffff;
    background-color: #bababa;
  `,
};

const sizeCss = {
  small: css`
    padding: 5px 10px;
    font-size: 12px;
  `,
  medium: css`
    padding: 15px;
    font-size: 18px;
  `,
  large: css`
    padding: 20px 50px;
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
`;
