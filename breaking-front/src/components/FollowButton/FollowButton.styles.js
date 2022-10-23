import Button from 'components/Button/Button';
import styled, { css } from 'styled-components';
import ReactLoading from 'react-loading';

export const FollowButton = styled(Button)`
  text-align: center;
  ${({ size }) => sizeCss[size]}
  ${({ color }) => colorCss[color]}
`;

export const Loading = styled(ReactLoading).attrs((props) => ({
  width: props.size === 'small' ? '10px' : '30px',
}))`
  margin: auto;
`;

const sizeCss = {
  small: css`
    width: 60px;
    height: 20px;
    font-size: 8px;
  `,
  medium: css`
    padding: 5px;
    width: 80px;
    height: 40px;
    font-size: 18px;
  `,
};

const colorCss = {
  white: css`
    color: ${({ theme }) => theme.black};
    background-color: ${({ theme }) => theme.white};
  `,
};
