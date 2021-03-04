import React, { Component } from 'react';
import Ticket from './Ticket';
import styled from 'styled-components';

class TicketInList extends Component {
  render() {
    const { AirLineData, filteredData, handleShowSelectedTicket } = this.props;

    return (
      <Tickets>
        {AirLineData.flights?.map((data, idx) => {
          return (
            !filteredData
              .map(imfo => {
                return imfo.id;
              })
              .includes(data.id) && (
              <Ticket
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
                handleShowSelectedTicket={handleShowSelectedTicket}
              />
            )
          );
        })}
      </Tickets>
    );
  }
}

export default TicketInList;

const Tickets = styled.div``;
