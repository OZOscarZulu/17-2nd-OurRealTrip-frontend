import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import SLIDERIMG from './StaySliderData';

const StayDetailSlider = () => {
  const [staySliderImg, setStaySliderImg] = useState([]);

  useEffect(() => {
    setStaySliderImg(SLIDERIMG);
  }, []);

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
        {staySliderImg.map((data, index) => {
          return (
            <SliderImgContainer key={index}>
              <img src={data.img} alt={data.id} />
            </SliderImgContainer>
          );
        })}
      </Slider>
    </Wrapper>
  );
};

export default StayDetailSlider;

const Wrapper = styled.div`
  /* border: 1px solid black; */
  outline: none;
`;

const SliderImgContainer = styled.div`
  width: 90%;
  height: 280px;
  /* border: 1px solid black; */
  outline: none;

  img {
    width: 100%;
    height: 100%;
  }
`;
