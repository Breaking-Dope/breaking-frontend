import { ScrollBarX } from 'components/ScrollBar/ScrollBar';
import styled from 'styled-components';

export const Upload = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.gray[50]};
`;

export const UploadTitle = styled.h3`
  margin-bottom: 40px;
  font-size: 24px;
  text-align: center;
`;

export const UploadForm = styled.div`
  display: flex;
  justify-content: center;
`;

export const UploadFileLayOut = styled.div`
  padding: 10px;
`;

export const UploadFileBox = styled.div`
  display: flex;
  padding: 10px;
  width: 145px;
  height: 145px;
  background-color: ${({ theme }) => theme.blue[300]};
  border-radius: 10px;
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

export const UploadPreview = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
`;

export const Carusel = styled(ScrollBarX)`
  width: 620px;
  height: 200px;
  overflow-x: scroll;
  white-space: nowrap;
  > * {
    margin-right: 20px;
    margin-left: 20px;
  }
`;

export const UploadPreviewImg = styled.div`
  display: inline-block;
  position: relative;
  padding: 10px;
`;

export const UploadBox = styled.img`
  width: 145px;
  height: 145px;
  background-color: ${({ theme }) => theme.blue[300]};
  border-radius: 10px;
`;

export const XMarkIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 24px;
  height: 24px;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.gray[300]};
  border-radius: 50%;
  cursor: pointer;
`;

export const ArrowIconContainer = styled.div`
  margin-bottom: 20px;
  cursor: pointer;
`;
