import React, { Component } from 'react';
import TripType from './TripType';
import styled from 'styled-components';

class MainSearchArea extends Component {
  render() {
    const { AirLineData, ChosenQuantityDataInLastPage } = this.props;
    return (
      <div>
        <MainSearchContainer>
          <TripType
            AirLineData={AirLineData}
            ChosenQuantityDataInLastPage={ChosenQuantityDataInLastPage}
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
`;
