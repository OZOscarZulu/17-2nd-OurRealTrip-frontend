import React, { Component } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import './slick.css';
import Slider from 'react-slick';
import styled from 'styled-components';

class MainAbroadTravelArea extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 800,
      autoplay: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      lazyLoad: true,
    };
    const { imageForabroadTravel } = this.props;
    return (
      <MainAbroadTravel>
        <AbroadTravel>
          <span className="CardListTitle">해외 특가 항공권</span>
          <AbroadTravelCardList>
            <Slider {...settings}>
              {imageForabroadTravel.map((data, idx) => {
                return (
                  <AbroadTravelCard key={idx}>
                    <AbroadImage src={data.locationImg} />
                    <CardContent>
                      <span className="location">{data.locationId}</span>
                      <span className="toLocation">{data.toLocation}</span>
                      <span className="day">{data.day}</span>
                      <div className="priceAndType">
                        <span className="price">{data.price}</span>
                        <span className="type">{data.type}</span>
                      </div>
                    </CardContent>
                  </AbroadTravelCard>
                );
              })}
            </Slider>
          </AbroadTravelCardList>
        </AbroadTravel>
      </MainAbroadTravel>
    );
  }
}

export default MainAbroadTravelArea;

const MainAbroadTravel = styled.section`
  margin-bottom: -100px;
`;
const AbroadTravel = styled.div`
  width: 1060px;
  height: 303px;
  margin: 80px auto;

  .CardListTitle {
    color: #343a40;
    font-size: 24px;
    font-weight: 500;
  }
`;

const AbroadTravelCardList = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 10px;
`;

const AbroadTravelCard = styled.p`
  width: 250px;
  height: 260px;
  padding-top: 0.1px;
  border: 1px solid #e3e3e3;
  border-radius: 2px;
  box-shadow: inset 0 0 0 0.1px rgb(132 140 148 / 30%);
`;

const AbroadImage = styled.img`
  position: relative;
  width: 100%;
  height: 150px;
  border: none;
  border-radius: 2px 2px 0 0;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-left: 15px;
  }

  .location {
    margin-top: 8px;
    font-size: 16px;
    font-weight: 500;
  }

  .toLocation {
    margin-top: 8px;
    color: #9b9898;
    font-size: 12px;
  }

  .day {
    font-size: 12px;
  }

  .priceAndType {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 8px;

    .type {
      margin-right: 15px;
      color: #4082ba;
    }
  }
`;
