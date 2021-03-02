import React, { Component } from 'react';
import 'react-dates/initialize';
import './datepicker.css';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';

class Date extends Component {
  state = {
    startDate: null,
    endDate: null,
    focusedInput: null,
  };

  render() {
    const { startDate, endDate } = this.state;
    localStorage.setItem('startDate', moment(startDate).format('YYYY-MM-DD'));
    localStorage.setItem('endDate', moment(endDate).format('YYYY-MM-DD'));
    return (
      <div>
        <DateRangePicker
          startDatePlaceholderText="가는날 선택 "
          endDatePlaceholderText="오는날 선택"
          displayFormat={() => 'YYYY-MM-DD'}
          startDate={startDate}
          startDateId="startDate"
          endDate={endDate}
          endDateId="endDate"
          onDatesChange={({ startDate, endDate }) =>
            this.setState({
              startDate,
              endDate,
            })
          }
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
        />
      </div>
    );
  }
}
export default Date;
