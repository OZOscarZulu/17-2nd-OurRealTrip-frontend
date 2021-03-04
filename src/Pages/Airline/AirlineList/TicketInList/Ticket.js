import React, { Component } from 'react';
import PlaneTime from './PlaneTime';
import styled from 'styled-components';

class Ticket extends Component {
  render() {
    const {
      id,
      logo,
      company,
      plane,
      leftTime,
      arrivedTime,
      leftName,
      arrivedName,
      neededTime,
      seatType,
      leftSeat,
      price,
      name,
      handleShowSelectedTicket,
    } = this.props;

    const arrived = arrivedTime.substring(0, 5);
    const left = leftTime.substring(0, 5);
    const need = neededTime.substring(0, 5);
    const won = Math.floor(price);
    const realWon = won.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return (
      <Card>
        <CompanyLogo src={logo}></CompanyLogo>
        <PlaneInform>
          <span>{company}</span>
          <span>{plane}</span>
        </PlaneInform>
        <PlaneTime time={left} name={leftName} />
        <CenterOfTime>
          <i className="fas fa-long-arrow-alt-right" />
          <span>{need}</span>
        </CenterOfTime>
        <PlaneTime time={arrived} name={arrivedName} />
        <ChairType>{seatType}</ChairType>
        <LeftSeat>{leftSeat}석</LeftSeat>
        <Price>{realWon}원</Price>
        <Change id={id} onClick={e => handleShowSelectedTicket(e)}>
          선택
        </Change>
      </Card>
    );
  }
}

export default Ticket;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  height: 80px;
  border: 0.1px solid #e3e3e3;
  border-radius: 2px;
  box-shadow: inset 0 0 0 0.1px rgb(132 140 148 / 30%);
  background-color: white;
`;

const CompanyLogo = styled.img`
  width: 28px;
  margin: 0 5px 0 20px;
`;

const PlaneInform = styled.div`
  display: flex;
  flex-direction: column;
  width: 60px;
  margin-left: 5px;
  margin-right: 50px;
  font-size: 12px;
  font-weight: 300;
`;

const CenterOfTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 18px;

  .fa-long-arrow-alt-right {
    color: #a4abb1;
  }

  span {
    color: #a4abb1;
    font-size: 12px;
  }
`;

const ChairType = styled.span`
  margin-left: 20px;
  font-size: 14px;
  font-weight: 300;
`;

const Price = styled.span`
  margin-left: 45px;
  font-size: 20px;
  font-weight: 400;
`;

const Change = styled.button`
  width: 64px;
  height: 40px;
  margin: 0 20px 0 36px;
  background-color: #52abf3;
  color: white;
  border: none;
  border-radius: 2px;
  box-shadow: inset 0 0 0 0.1 rgb(132 140 148 / 30%);
  font-size: 15px;
  transition: all 0.2s;

  &:hover {
    border: none;
    background-color: #1583da;
    outline: none;
    transition: all 0.2s;
  }
  &:focus {
    outline: none;
  }
`;

const LeftSeat = styled.span`
  margin-left: 50px;
  font-size: 14px;
  font-weight: 300;
`;
