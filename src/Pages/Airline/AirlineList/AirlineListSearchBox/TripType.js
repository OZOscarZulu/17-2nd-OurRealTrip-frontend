import React, { Component } from 'react';
import Input from './Input';
import styled from 'styled-components';

class TripType extends Component {
  render() {
    const {
      handleTicketTypeChange,
      isRound,
      roundTrip,
      oneWay,
      AirLineData,
      ChosenQuantityDataInLastPage,
    } = this.props;
    return (
      <div className="tripType">
        <TripTypeContainer>
          <div className="roundAndOneWay">
            <div className="typeContainer">
              <span onClick={e => handleTicketTypeChange(e)}>왕복</span>
            </div>
          </div>
          <InputContainer>
            <Input
              ChosenQuantityDataInLastPage={ChosenQuantityDataInLastPage}
              AirLineData={AirLineData}
              trevelType={isRound ? roundTrip : oneWay}
            />
          </InputContainer>
        </TripTypeContainer>
      </div>
    );
  }
}

export default TripType;

const TripTypeContainer = styled.div`
  width: 1064px;
  height: 40px;
  margin: 0 auto;

  .roundAndOneWay {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25px;
    margin-bottom: 7px;
    color: white;

    .typeContainer {
      width: 200px;
      margin-bottom: -10px;
      span {
        width: 64px;
        font-size: 14px;
        cursor: pointer;
      }
    }
  }
`;

const InputContainer = styled.div``;
