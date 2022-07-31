import styled from 'styled-components';

export const PostWriteTitle = styled.h3`
  font-size: 18px;
`;

export const FindLocationLayout = styled.div`
  display: inline-block;
  margin-left: 10px;
  cursor: pointer;
  > svg {
    width: 15px;
    height: 15px;
    vertical-align: middle;
    > path {
      stroke: ${({ theme }) => theme.blue[900]};
    }
  }
`;

export const FindLocationMessage = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.blue[900]};
  vertical-align: middle;
`;

export const LocationInput = styled.input`
  width: 410px;
  padding: 10px;
  margin-top: 20px;
  border: solid 1px ${({ theme }) => theme.gray[500]};
  border-radius: 10px;
`;
