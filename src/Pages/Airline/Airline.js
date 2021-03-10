import React, { Component } from 'react';
import MainSearchArea from './MainSearchArea/MainSearchArea';
import MainSlideArea from './MainSlideArea/MainSlideArea';
import MainAbroadTravelArea from './MainAbroadTravelArea/MainAbroadTravelArea';
import styled from 'styled-components';

class Airline extends Component {
  state = { isRound: true };

  handleTicketTypeChange = e => {
    e.target.innerText === '왕복'
      ? this.setState({ isRound: true })
      : this.setState({ isRound: false });
  };

  render() {
    const { isRound } = this.state;
    return (
      <div className="airLine">
        <MainSearchArea
          handleTicketTypeChange={this.handleTicketTypeChange}
          isRound={isRound}
          roundTrip={roundTrip}
          oneWay={oneWay}
        />
        <Center>
          <MainSlideArea imageDataForSlide={imageDataForSlide} />
          <MainAbroadTravelArea imageForabroadTravel={imageForabroadTravel} />
          <MainAbroadTravelArea imageForabroadTravel={imageForLocalTravel} />
        </Center>
      </div>
    );
  }
}

export default Airline;

const roundTrip = {
  arrivedLocation: '도착지가 어디인가요?',
  leavingDay: '가는날 선택',
  arrivedDay: '오는날 선택',
  differenceWay: '출발/도착 다른 구간',
};

const oneWay = {
  arrivedLocation: '도착지가 어디인가요?',
  leavingDay: '가는날 선택',
  arrivedDay: '',
  differenceWay: '',
};

const imageDataForSlide = [
  {
    imageSrc:
      'https://d2ur7st6jjikze.cloudfront.net/cms/574_original_1604895320.jpg?1604895320',
    imageId: '특가1',
  },
  {
    imageSrc:
      'https://d2ur7st6jjikze.cloudfront.net/cms/1110_original_1598605405.jpg?1598605405',
    imageId: '특가2',
  },
  {
    imageSrc:
      'https://d2ur7st6jjikze.cloudfront.net/cms/574_original_1604895320.jpg?1604895320',
    imageId: '특가3',
  },
  {
    imageSrc:
      'https://d2ur7st6jjikze.cloudfront.net/cms/1110_original_1598605405.jpg?1598605405',
    imageId: '특가4',
  },
];

const imageForabroadTravel = [
  {
    locationId: '일본',
    locationImg:
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    toLocation: '인천 - 일본',
    day: '3월 22일 - 4월 15일',
    price: '120,000원 ~',
    type: '직항',
  },
  {
    locationId: '네덜란드',
    locationImg:
      'https://images.unsplash.com/photo-1558000143-a78f8299c40b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    toLocation: '인천 - 네덜란드',
    day: '3월 1일 - 4월 2일',
    price: '550,000원 ~',
    type: '편도',
  },
  {
    locationId: '독일',
    locationImg:
      'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    toLocation: '인천 - 독일',
    day: '2월 8일 - 4월 15일',
    price: '800,000원 ~',
    type: '편도/직항',
  },
  {
    locationId: '중국',
    locationImg:
      'https://images.unsplash.com/photo-1517309230475-6736d926b979?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    toLocation: '인천 - 중국',
    day: '3월 9일 - 4월 12일',
    price: '150,000원 ~',
    type: '직항',
  },
  {
    locationId: '대만',
    locationImg:
      'https://images.unsplash.com/photo-1508248467877-aec1b08de376?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
    toLocation: '인천 - 대만',
    day: '3월 22일 - 4월 15일',
    price: '220,000원 ~',
    type: '직항',
  },
  {
    locationId: '크로아티아',
    locationImg:
      'https://images.unsplash.com/photo-1575540291670-8d3b26f7d327?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1410&q=80',
    toLocation: '인천 - 크로아티아',
    day: '3월 6일 - 4월 5일',
    price: '320,000원 ~',
    type: '편도',
  },
  {
    locationId: '루마니아',
    locationImg:
      'https://images.unsplash.com/photo-1544169086-da2d0dc39330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    toLocation: '인천 - 루마니아',
    day: '3월 1일 - 4월 16일',
    price: '520,000원 ~',
    type: '직항',
  },
];
const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2px;
  margin-bottom: 70px;
`;

const imageForLocalTravel = [
  {
    locationId: '제주',
    locationImg:
      'https://images.unsplash.com/photo-1551759977-c71daa5739a4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    toLocation: '인천 - 제주',
    day: '3월 22일 - 4월 15일',
    price: '90,000원 ~',
    type: '직항/편도',
  },
  {
    locationId: '전주',
    locationImg:
      'https://images.unsplash.com/photo-1548115184-bc6544d06a58?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    toLocation: '인천 - 전주',
    day: '3월 1일 - 4월 2일',
    price: '50,000원 ~',
    type: '편도',
  },
  {
    locationId: '강릉',
    locationImg:
      'https://images.unsplash.com/photo-1546385040-d48180ede560?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
    toLocation: '인천 - 독일',
    day: '2월 8일 - 4월 15일',
    price: '40,000원 ~',
    type: '편도/직항',
  },
  {
    locationId: '부산',
    locationImg:
      'https://images.unsplash.com/photo-1599577644020-2d5b3ad2db60?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    toLocation: '인천 - 부산',
    day: '3월 9일 - 4월 12일',
    price: '50,000원 ~',
    type: '직항',
  },
  {
    locationId: '서울',
    locationImg:
      'https://images.unsplash.com/photo-1546874177-9e664107314e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    toLocation: '인천 - 서울',
    day: '3월 22일 - 4월 15일',
    price: '220,000원 ~',
    type: '직항',
  },
  {
    locationId: '광주',
    locationImg:
      'https://images.unsplash.com/photo-1593419522318-81b7c346a3e8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2130&q=80',
    toLocation: '인천 - 광주',
    day: '3월 6일 - 4월 5일',
    price: '320,000원 ~',
    type: '편도',
  },
  {
    locationId: '보령',
    locationImg:
      'https://images.unsplash.com/photo-1568452902857-b65b7647efb1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
    toLocation: '인천 - 보령',
    day: '3월 1일 - 4월 16일',
    price: '520,000원 ~',
    type: '직항',
  },
];
