import React, { Component } from 'react';
import styled from 'styled-components';

class Input extends Component {
  render() {
    const { AirLineData, ChosenQuantityDataInLastPage } = this.props;
    return (
      <div className="input">
        <InputContainer>
          <LocationInput>
            <div className="leftPoint">
              {AirLineData.departureAirportName}(
              {AirLineData.departureAirportCode})
            </div>
            <span>
              <button>
                <i className="fas fa-exchange-alt" />
              </button>
            </span>
            <div className="arrivedPoint">
              {AirLineData.arrivalAirportName}({AirLineData.arrivalAirportCode})
            </div>
          </LocationInput>
          <DayInput>
            <span className="chalender">
              <i class="far fa-calendar-alt" />
            </span>
            <div className="leftDay">{localStorage.getItem('startDate')}</div>
            <span class="hyponTag">-</span>
            <div className="arrivedDay">{localStorage.getItem('endDate')}</div>
          </DayInput>
          <Quantity>
            <span>
              <i className="far fa-user" />
              승객
              {ChosenQuantityDataInLastPage ? ChosenQuantityDataInLastPage : 1}
              명, 전체
            </span>
            <i className="fas fa-chevron-down" />
          </Quantity>
          <SearchBox>검색</SearchBox>
        </InputContainer>
      </div>
    );
  }
}

export default Input;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
`;

const LocationInput = styled.div`
  display: flex;
  align-items: center;
  width: 422px;
  height: 40px;
  background-color: white;
  border: none;
  border-radius: 3px;
  box-shadow: inset 0 0 0 1px rgb(132 140 148 / 30%);
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 1px 3px rgb(232 236 239/30%);
    transition: 0.2s;
  }

  div {
    display: flex;
    align-items: center;
    width: 195px;
    height: 45px;
    margin-bottom: 2px;
    padding-left: 10px;
    font-weight: 500;
  }

  .arrivedPoint {
    font-weight: 500;
  }

  span {
    width: 31px;
    height: 31px;
    background-color: white;

    button {
      width: 25px;
      height: 25px;
      margin-top: 3px;
      border: none;
      border-radius: 3px;

      &:focus {
        outline: none;
      }
      .fa-exchange-alt {
        color: #a4abb1;
      }
    }
  }
`;

const DayInput = styled.div`
  display: flex;
  align-items: center;
  width: 290px;
  height: 40px;
  margin-left: 4px;
  background-color: white;
  border-radius: 3px;
  box-shadow: inset 0 0 0 1px rgb(132 140 148 / 30%);
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 1px 3px rgb(232 236 239/30%);
    transition: 0.2s;
  }

  .chalender {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    color: #51abf3;
  }

  div {
    width: 106px;
    height: 45px;
    padding: 12px 0 0 7px;
    border: none;
    box-shadow: none;

    &:focus {
      border: none;
      outline: none;
    }
  }
`;

const Quantity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 270px;
  height: 40px;
  margin-left: 4px;
  background-color: white;
  border-radius: 3px;
  box-shadow: inset 0 0 0 1px rgb(132 140 148 / 30%);
  transition: 0.2s;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: 0 0 1px 3px rgb(232 236 239/30%);
    transition: 0.2s;
  }

  span {
    display: flex;
    align-items: center;
    width: 150px;
    height: 48px;
    padding-left: 10px;
    font-weight: 500;
  }

  .fa-user {
    margin-right: 5px;
    color: #51abf3;
  }

  .fa-chevron-down {
    margin-right: 10px;
  }
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 74px;
  height: 40px;
  margin: 0 0 3px 4px;
  background-color: #e6f4fd;
  color: #52abf3;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px rgb(132 140 148 / 30%);
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #cbe6fd;
    transition: 0.2s;
  }
`;
