import React, { Component } from 'react';
import TripType from './TripType';
import styled from 'styled-components';

class MainSearchArea extends Component {
  render() {
    const { handleTicketTypeChange, isRound, roundTrip, oneWay } = this.props;
    return (
      <div>
        <MainSearchContainer>
          <TripType
            handleTicketTypeChange={handleTicketTypeChange}
            isRound={isRound}
            roundTrip={roundTrip}
            oneWay={oneWay}
          />
        </MainSearchContainer>
      </div>
    );
  }
}

export default MainSearchArea;

const MainSearchContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 40px 0 56px;
  /* background-size: 100% 450px; */

  /* &::before {
    content: '';
    width: 100%;
    height: 350px;
    background: url('https://images.unsplash.com/photo-1488085061387-422e29b40080?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80')
      no-repeat 0 0;
    background-size: 100% 360px;
    opacity: 0.9;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  } */
`;
