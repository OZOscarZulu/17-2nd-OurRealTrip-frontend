import React, { Component } from 'react';
import Input from './Input';
import styled from 'styled-components';

class TripType extends Component {
  render() {
    const { handleTicketTypeChange, isRound, roundTrip, oneWay } = this.props;
    return (
      <div className="tripType">
        <TripTypeContainer>
          <div className="roundAndOneWay">
            <div className="typeContainer">
              <span onClick={e => handleTicketTypeChange(e)}>왕복</span>
              <span onClick={e => handleTicketTypeChange(e)}>편도</span>
            </div>
            <div className="reservationContainer">
              <span>항공권 예약내역</span>
              <i class="far fa-arrow-alt-circle-right" />
            </div>
          </div>
          <InputContainer>
            <Input trevelType={isRound ? roundTrip : oneWay} />
          </InputContainer>
        </TripTypeContainer>
      </div>
    );
  }
}

export default TripType;

const TripTypeContainer = styled.div`
  position: relative;
  width: 1064px;
  height: auto;
  margin: 0 auto;
  z-index: 1;

  .roundAndOneWay {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25px;
    margin-bottom: 20px;
    color: white;

    .typeContainer {
      display: flex;
      align-items: center;
      width: 200px;

      span {
        width: 64px;
        margin-left: 10px;
        /* border-bottom: 2px solid white; */
        font-size: 16px;
        cursor: pointer;
      }
    }
  }

  .reservationContainer {
    span {
      margin-right: 5px;
    }
  }
`;

const InputContainer = styled.div``;
