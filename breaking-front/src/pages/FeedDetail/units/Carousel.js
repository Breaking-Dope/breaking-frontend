/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import MediaModal from 'pages/FeedDetail/units/MediaModal';
import * as Style from 'pages/FeedDetail/units/Carousel.styles';
import { ReactComponent as LeftIcon } from 'assets/svg/carousel-left.svg';
import { ReactComponent as RightIcon } from 'assets/svg/carousel-right.svg';
import { ReactComponent as SlideDotIcon } from 'assets/svg/slide-dot.svg';
import { ReactComponent as SildeDotFillIcon } from 'assets/svg/slide-dot-fill.svg';

const Carousel = ({ mediaList }) => {
  const mediaCount = mediaList.length;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalSrc, setModalSrc] = useState('');
  const [isOpenMediaModal, setisOpenMediaModal] = useState(false);
  const slideRef = useRef(null);

  const prevSlide = () => {
    currentSlide !== 0 && setCurrentSlide((pre) => pre - 1);
  };
  const nextSlide = () => {
    currentSlide < mediaCount - 1 && setCurrentSlide((pre) => pre + 1);
  };

  const imageClick = (event) => {
    setModalSrc(event.target.src);
    setisOpenMediaModal((pre) => !pre);
  };

  const closeClick = () => {
    setisOpenMediaModal(false);
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide * 800}px)`;
  }, [currentSlide]);
  return (
    <>
      <MediaModal
        isOpen={isOpenMediaModal}
        closeClick={closeClick}
        media={modalSrc}
      />
      <Style.CarouselContainer>
        <Style.SliderContainer ref={slideRef} mediaCount={mediaCount}>
          {mediaList.map((media, index) =>
            /\.(?:jpg|gif|png)/g.test(media) ? (
              <Style.Image
                src={media}
                onClick={imageClick}
                key={'media-' + index}
              />
            ) : (
              <Style.Video key={'media-' + index} controls>
                <source src={media} type="video/mp4" />
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
            {currentSlide === index ? <SildeDotFillIcon /> : <SlideDotIcon />}
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
