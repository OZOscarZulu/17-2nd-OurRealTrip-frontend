import React, { Component } from 'react';
import styled from 'styled-components';

class TowhereBox extends Component {
  render() {
    const { travel } = this.props;
    return (
      <WhereBox>
        <div className="englishId">{travel.englishId}</div>
        <div className="koreanId">{travel.koreanId}</div>
        <div className="day">{travel.day}</div>
      </WhereBox>
    );
  }
}

export default TowhereBox;

const WhereBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  margin: 0 10px;
  color: white;

  div {
    margin-bottom: 5px;
  }

  .englishId {
    font-size: 24px;
  }

  .koreanId {
    font-size: 12px;
    font-weight: 300;
  }

  .day {
    font-size: 12px;
    font-weight: 300;
  }
`;
