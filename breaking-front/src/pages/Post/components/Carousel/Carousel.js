import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import * as Style from 'pages/Post/components/Carousel/Carousel.styles';
import { ReactComponent as LeftIcon } from 'assets/svg/carousel_left.svg';
import { ReactComponent as RightIcon } from 'assets/svg/carousel_right.svg';
import { ReactComponent as SlideDotIcon } from 'assets/svg/slide_dot.svg';
import { ReactComponent as SlideDotFillIcon } from 'assets/svg/slide_dot_fill.svg';
import ImageUrlConverter from 'utils/ImageUrlConverter';

const Carousel = ({ mediaList }) => {
  const mediaCount = mediaList.length;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const showPopup = (media) => {
    let image = new Image();
    image.src = media;
    let width = image.width;
    let height = image.height;

    if (width >= 1000) {
      height *= 1000 / width;
      width = 1000;
    }

    return window.open(
      media,
      'Popup',
      `width=${width}, height=${height}, left=600, top=100, scrollbars=no, resizable=no, clearcache=yes`
    );
  };

  const prevSlide = () => {
    currentSlide !== 0 && setCurrentSlide((pre) => pre - 1);
  };
  const nextSlide = () => {
    currentSlide < mediaCount - 1 && setCurrentSlide((pre) => pre + 1);
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide * 800}px)`;
  }, [currentSlide]);

  return (
    <>
      <Style.CarouselContainer>
        <Style.SliderContainer ref={slideRef} mediaCount={mediaCount}>
          {mediaList.map((media, index) =>
            /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(media) ? (
              <Style.Image
                src={ImageUrlConverter(media)}
                onClick={() => {
                  showPopup(ImageUrlConverter(media));
                }}
                key={'media-' + index}
              />
            ) : (
              <Style.Video key={'media-' + index} controls>
                <source src={ImageUrlConverter(media)} type="video/mp4" />
              </Style.Video>
            )
          )}
        </Style.SliderContainer>
        {currentSlide !== 0 && (
          <Style.LeftIcon>
            <LeftIcon onClick={prevSlide} />
          </Style.LeftIcon>
        )}
        {currentSlide !== mediaCount - 1 && (
          <Style.RightIcon>
            <RightIcon onClick={nextSlide} />
          </Style.RightIcon>
        )}
      </Style.CarouselContainer>
      <Style.SlideDotContainer>
        {mediaList.map((media, index) => (
          <Style.SlideDot
            key={'dot-' + index}
            onClick={() => setCurrentSlide(index)}
          >
            {currentSlide === index ? <SlideDotFillIcon /> : <SlideDotIcon />}
          </Style.SlideDot>
        ))}
      </Style.SlideDotContainer>
    </>
  );
};

Carousel.propTypes = {
  mediaList: PropTypes.array,
};

export default Carousel;
