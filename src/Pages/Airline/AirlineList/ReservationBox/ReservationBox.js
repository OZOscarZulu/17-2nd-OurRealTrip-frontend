import React, { Component } from 'react';
import styled from 'styled-components';
import DATAINBOX from './DATAINBOX';

class ReservationBox extends Component {
  render() {
    const { filteredData, ChosenQuantityDataInLastPage } = this.props;

    const money = filteredData.map(data => {
      return Math.floor(data.price);
    });
    const moneyCut =
      Number(money[0] + money[1]) * Number(ChosenQuantityDataInLastPage);
    const moneyDot = moneyCut.toLocaleString();
    const tax = (moneyCut * 0.12).toLocaleString();
    const oil = (moneyCut * 0.08).toLocaleString();
    const onlyPlane = (moneyCut * 0.8).toLocaleString();

    return (
      <Reservation>
        <Detail>상세요금</Detail>
        <Category>
          <span className="category">{DATAINBOX[0]}</span>
          <span>{DATAINBOX[1]}</span>
          <span>{DATAINBOX[2]}</span>
          <span>{DATAINBOX[3]}</span>
          <span>{DATAINBOX[4]}</span>
          <span>{DATAINBOX[5]}</span>
          <span className="total">{DATAINBOX[6]}</span>
        </Category>
        <Value>
          <span className="category">승객</span>
          <span className="airPrice">{onlyPlane}원</span>
          <span className="oilPrice">{oil}원</span>
          <span className="tax">{tax}원</span>
          <span className="ticketTax">0원</span>
          <span className="quantity">{ChosenQuantityDataInLastPage}명</span>
          <span className="total">{moneyDot}원</span>
        </Value>
        <Total>
          <TotalPay>총 예상요금</TotalPay>
          <AccountAndButton>
            <span>{moneyDot}원</span>
            <button>예약하기</button>
          </AccountAndButton>
        </Total>
      </Reservation>
    );
  }
}

export default ReservationBox;

const Reservation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1064px;
  height: 225px;
  margin: 15px auto 0 auto;
  background-color: white;
  border: 0.1px solid #e3e3e3;
  border-radius: 2px;
  box-shadow: inset 0 0 0 0.1px rgb(132 140 148 / 30%);
`;

const Detail = styled.div`
  width: 1016px;
  height: 28px;
  margin: 10px auto;
  font-size: 17px;
`;

const Category = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1016px;
  height: 32px;
  margin: 0 auto;
  border-top: 0.1px solid #e3e3e3;

  span {
    font-size: 12px;
    margin-left: -20px;
  }

  .category {
    margin-left: 0px;
  }

  .total {
    margin-left: 60px;
  }
`;

const Value = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 1016px;
  height: 49px;
  margin: 0 auto;
  border-top: 0.1px solid #e3e3e3;
  border-bottom: 0.1px solid #e3e3e3;
  font-size: 14px;

  span {
    font-size: 12px;
  }

  .airPrice {
    width: 145px;
    margin-right: 30px;
  }

  .category {
    width: 115px;
    margin-right: 35px;
  }

  .oilPrice {
    margin-right: 70px;
    width: 120px;
  }

  .tax {
    margin-right: 40px;
    width: 145px;
  }

  .ticketTax {
    margin-right: 65px;
    width: 120px;
  }

  .quantity {
    width: 170px;
    margin-right: 50px;
  }

  .total {
    width: 63px;
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1016px;
  height: 49px;
  margin: 15px auto 15px auto;
  font-size: 16px;
  font-weight: 500;
`;

const TotalPay = styled.span``;

const AccountAndButton = styled.span`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;

  button {
    width: 120px;
    height: 48px;
    font-size: 16px;
    background-color: #52abf3;
    color: white;
    border: none;
    border-radius: 2px;
    box-shadow: inset 0 0 0 0.1 rgb(132 140 148 / 30%);
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
  }
`;
