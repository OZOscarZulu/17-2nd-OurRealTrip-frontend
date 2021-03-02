import React, { Component } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import styled from 'styled-components';

class MainSlideArea extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 800,
      autoplay: true,
      slidesToShow: 2,
      slidesToScroll: 4,
      lazyLoad: true,
    };
    const { imageDataForSlide } = this.props;

    return (
      <section className="MainSlideArea">
        <SlickContainer>
          <Slider {...settings}>
            {imageDataForSlide.map((data, index) => {
              return (
                <div className="sliderImg" key={index}>
                  <SlideImage src={data.imageSrc} alt={data.id} />
                </div>
              );
            })}
          </Slider>
        </SlickContainer>
      </section>
    );
  }
}

export default MainSlideArea;

const SlickContainer = styled.div`
  width: 1060px;
  height: 128px;
  margin: 80px auto 0 auto;
`;

const SlideImage = styled.img`
  width: 520px;
  height: 128px;
  border-radius: 2px;
`;
