import React, { Component } from 'react';
import MainSearchArea from './MainSearchArea';
import styled from 'styled-components';

class AirlineListSearchBox extends Component {
  render() {
    const { AirLineData, ChosenQuantityDataInLastPage } = this.props;
    return (
      <SearchBoxComponent>
        <MainSearchArea
          ChosenQuantityDataInLastPage={ChosenQuantityDataInLastPage}
          AirLineData={AirLineData}
        />
      </SearchBoxComponent>
    );
  }
}

export default AirlineListSearchBox;

const SearchBoxComponent = styled.div`
  width: 100%;
  height: 90px;
  margin-bottom: 25px;
  background-color: #52abf3;
`;
