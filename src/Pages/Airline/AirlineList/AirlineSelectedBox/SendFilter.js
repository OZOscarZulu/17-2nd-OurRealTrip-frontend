import React, { Component } from 'react';
import AirlineSelectedBox from './AirlineSelectedBox';
import styled from 'styled-components';

class SendFilter extends Component {
  state = { data: [] };

  render() {
    const { AirLineData, filteredData } = this.props;
    return (
      <div>
        {filteredData?.map((data, idx) => {
          return (
            <AirlineSelectedBox
              key={idx}
              logo={data.airline_logo}
              company={data.airline}
              plane={data.flightCode}
              leftTime={data.departureTime}
              arrivedTime={data.arrivalTime}
              leftName={AirLineData.departureAirportCode}
              arrivedName={AirLineData.arrivalAirportCode}
              neededTime={data.durationTime}
              seatType={data.status}
              leftSeat={data.remainingSeat}
              price={data.price}
              id={data.id}
              name={data.id}
              handleShowSelectedTicket={this.props.handleShowSelectedTicket}
            />
          );
        })}
      </div>
    );
  }
}

export default SendFilter;
