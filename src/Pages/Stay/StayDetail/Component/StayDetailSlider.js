import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import SLIDERIMG from './StaySliderData';

const StayDetailSlider = ({ data }) => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: true,
    draggable: true,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        {data.slide_image &&
          data.slide_image.map((data, index) => {
            return (
              <SliderImgContainer key={index}>
                <img src={data.image} alt="gg" />
              </SliderImgContainer>
            );
          })}
      </Slider>
    </Wrapper>
  );
};

export default StayDetailSlider;

const Wrapper = styled.div`
  outline: none;
`;

const SliderImgContainer = styled.div`
  width: 100%;
  height: 280px;
  outline: none;

  img {
    width: 100%;
    height: 100%;
  }
`;
