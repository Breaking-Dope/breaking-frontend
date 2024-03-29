import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  width: 800px;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
`;

export const SliderContainer = styled.div`
  display: flex;
  width: ${({ mediaCount }) => mediaCount * 800}px;
`;

export const Video = styled.video`
  width: 800px;
  height: 400px;
  background-color: ${({ theme }) => theme.black};
`;

export const Image = styled.img`
  width: 800px;
  height: 400px;
  background-color: ${({ theme }) => theme.gray[200]};
  object-fit: cover;
  cursor: zoom-in;
`;

export const SlideDotContainer = styled.ul`
  display: flex;
  justify-content: center;
`;

export const SlideDot = styled.li`
  cursor: pointer;
`;

export const LeftIcon = styled.span`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: 20px;
  cursor: pointer;
`;
export const RightIcon = styled.span`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: 20px;
  cursor: pointer;
`;
