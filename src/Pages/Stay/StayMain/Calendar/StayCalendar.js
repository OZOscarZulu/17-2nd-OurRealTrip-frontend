import React, { useState } from 'react';
import 'react-dates/initialize';
import './datepicker.css';
import { DateRangePicker } from 'react-dates';

import styled from 'styled-components';

const StayCalendar = ({ setStart, setEnd }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [date] = useState(new Date());
  const [focusedInput, setFocusInput] = useState(null);

  const onDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);

    if (startDate !== null && endDate !== null) {
      setStart(startDate.format('YYYY-MM-DD'));
      setEnd(endDate.format('YYYY-MM-DD'));
    }
  };

  const formatDate = (date, type) => {
    let year = date.getFullYear();
    let month = 1 + date.getMonth();
    month = month >= 10 ? month : '0' + month;
    let day = date.getDate() + (type === 'startDate' ? 0 : 1);
    day = day >= 10 ? day : '0' + day;
    return year + '-' + month + '-' + day;
  };

  return (
    <SearchDateContainer>
      <DateRangePicker
        startDatePlaceholderText={formatDate(date, 'startDate')}
        endDatePlaceholderText={formatDate(date, 'endDate')}
        startDate={startDate} // momentPropTypes.momentObj or null,
        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
        endDate={endDate} // momentPropTypes.momentObj or null,
        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
        onDatesChange={({ startDate, endDate }) =>
          onDatesChange({ startDate, endDate })
        }
        // PropTypes.func.isRequired,
        focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={focusedInput => setFocusInput(focusedInput)} // PropTypes.func.isRequired,
        showClearDates={true}
        displayFormat={() => 'YYYY-MM-DD'}
      />
    </SearchDateContainer>
  );
};

export default StayCalendar;

const SearchDateContainer = styled.div`
  width: 100%;
  cursor: pointer;
`;
