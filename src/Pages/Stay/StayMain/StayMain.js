import React, { Component } from 'react';
import styled from 'styled-components';

export class StayMain extends Component {
  render() {
    return (
      <MainPage>
        <div>숙소</div>
      </MainPage>
    );
  }
}

export default StayMain;

const MainPage = styled.div`
  div {
    display: flex;
    margin: 0 auto;
  }
`;
