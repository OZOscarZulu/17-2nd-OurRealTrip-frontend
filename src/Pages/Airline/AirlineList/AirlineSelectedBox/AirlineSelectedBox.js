import React, { Component } from 'react';
import AirlineTime from './AirlineTime';
import styled from 'styled-components';

class AirlineSelectedBox extends Component {
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
      price,
      handleShowSelectedTicket,
    } = this.props;
    const lefted = leftTime.substring(0, 5);
    const needed = neededTime.substring(0, 5);
    const arrived = arrivedTime.substring(0, 5);
    const won = Math.floor(price);
    const realWon = won.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return (
      <SelectedBox>
        <div className="centerBoxInSelectedBox">
          <AirLine>항공편</AirLine>
          <ToWhere>
            {leftName}
            <i className="fas fa-long-arrow-alt-right" />
            {arrivedName}
          </ToWhere>
          <Day>3/ 2021</Day>
          <CompanyLogo src={logo}></CompanyLogo>
          <PlaneInform>
            <span>{company}</span>
            <span>{plane}</span>
          </PlaneInform>
          <AirlineTime time={lefted} name={leftName} />
          <CenterOfTime>
            <i className="fas fa-long-arrow-alt-right" />
            <span>{needed}</span>
          </CenterOfTime>
          <AirlineTime time={arrived} name={arrivedName} />
          <ChairType>{seatType}</ChairType>
          <Price>{realWon}원</Price>
          <Change id={id} onClick={handleShowSelectedTicket}>
            항공편 변경
          </Change>
        </div>
      </SelectedBox>
    );
  }
}

export default AirlineSelectedBox;

const SelectedBox = styled.div`
  display: flex;
  align-items: center;
  width: 1064px;
  height: 64px;
  margin: 20px auto;
  border: 0.1px solid #e3e3e3;
  border-radius: 2px;
  box-shadow: inset 0 0 0 0.1px rgb(132 140 148 / 30%);
  background-color: white;

  .centerBoxInSelectedBox {
    display: flex;
    align-items: center;
    width: 1040px;
    height: 32px;
  }
`;

const AirLine = styled.span`
  width: 50px;
  height: 24px;
  margin: 0 10px 0 20px;
  padding: 4.5px;
  border-radius: 2px;
  background-color: #1583da;
  box-shadow: inset 0 0 0 1px rgb(132 140 148 / 30%);
  color: white;
  font-size: 13px;
  text-align: center;
`;

const ToWhere = styled.span`
  width: 110px;
  font-size: 16px;
  font-weight: 500;
  .fa-long-arrow-alt-right {
    margin: 0 10px;
    color: #a4abb1;
  }
`;

const Day = styled.span`
  width: 50px;
  margin: 0 20px 0 10px;
  font-size: 12px;
  font-weight: 500;
`;

const CompanyLogo = styled.img`
  width: 28px;
  margin: 0 5px 0 20px;
`;

const PlaneInform = styled.div`
  display: flex;
  flex-direction: column;
  width: 55px;
  margin-left: 5px;
  margin-right: 35px;
  font-size: 12px;
  font-weight: 300;
`;

const CenterOfTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  margin-left: 50px;

  .fa-long-arrow-alt-right {
    color: #a4abb1;
  }

  span {
    color: #a4abb1;
    font-size: 12px;
  }
`;

const ChairType = styled.span`
  width: 35px;
  margin-left: 15px;
  font-size: 12px;
`;

const Price = styled.span`
  width: 109px;
  margin-left: 80px;
  font-size: 20px;
  font-weight: 500;
`;

const Change = styled.button`
  width: 85px;
  height: 100%;
  margin-left: 35px;
  background-color: #e9ecef;
  color: #495056;
  border: none;
  border-radius: 2px;
  box-shadow: inset 0 0 0 0.1 rgb(132 140 148 / 30%);
  font-size: 14px;
  transition: all 0.2s;

  &:hover {
    border: none;
    background-color: #c3c3c3;
    outline: none;
    transition: all 0.2s;
  }
  &:focus {
    outline: none;
  }
`;
