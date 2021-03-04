import React, { Component } from 'react';
import styled from 'styled-components';

class PlaneTime extends Component {
  render() {
    const { time, name } = this.props;
    return (
      <TimeAir>
        <span className="time">{time}</span>
        <span>{name}</span>
      </TimeAir>
    );
  }
}

export default PlaneTime;

const TimeAir = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  span {
    font-size: 14px;
  }

  .time {
    font-size: 17px;
    font-weight: 500;
  }
`;
