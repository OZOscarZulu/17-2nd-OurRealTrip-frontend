import React, { Component } from 'react';
import styled from 'styled-components';

class AirlineTime extends Component {
  render() {
    const { name, time } = this.props;
    return (
      <TimeAir>
        <span className="time">{time}</span>
        <span>{name}</span>
      </TimeAir>
    );
  }
}

export default AirlineTime;

const TimeAir = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 40px;

  span {
    font-size: 14px;
  }

  .time {
    font-size: 16px;
    font-weight: 500;
  }
`;
