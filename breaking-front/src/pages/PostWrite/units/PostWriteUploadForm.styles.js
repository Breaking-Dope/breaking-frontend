import { ScrollBarX } from 'components/ScrollBar/ScrollBar';
import styled from 'styled-components';

export const UploadLayout = styled.div`
  width: 100%;
`;

export const UploadTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 18px;
  text-align: center;
`;

export const UploadForm = styled.div`
  display: flex;
  height: 200px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.gray[50]};
  justify-content: center;
`;

export const UploadFileBox = styled.div`
  display: flex;
  width: 130px;
  height: 130px;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.blue[300]};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

export const PlusIconContainer = styled.div`
  margin-top: 30px;
`;

export const UploadCount = styled.p`
  margin-top: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.brown};
  &::after {
    color: ${({ theme }) => theme.blue[900]};
    content: '/10';
  }
`;

export const UploadPreviewLayout = styled.div`
  display: flex;
  margin-left: 20px;
  align-items: center;
`;

export const Carousel = styled(ScrollBarX)`
  width: 520px;
  height: 180px;
  white-space: nowrap;
  overflow-x: scroll;
  > * {
    margin-right: 10px;
    margin-left: 10px;
  }
`;

export const UploadPreviewImage = styled.div`
  display: inline-block;
  position: relative;
  padding: 10px;
`;

export const UploadBox = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.blue[300]};
`;

export const XMarkIconContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
  border: 1px solid ${({ theme }) => theme.gray[300]};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.white};
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ArrowIconContainer = styled.div`
  margin-bottom: 20px;
  cursor: pointer;
`;
