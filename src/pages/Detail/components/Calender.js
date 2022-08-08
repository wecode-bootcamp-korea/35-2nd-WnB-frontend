import React from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import { subDays, addDays } from 'date-fns';
import styled, { createGlobalStyle } from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

const Calender = ({ startDate, onChange, endDate, reservations }) => {
  const newReser = () => {
    let newArr = [];
    reservations.map(els => {
      return newArr.push({
        start: subDays(new Date(els.check_in), 1),
        end: addDays(new Date(els.check_out), -1),
      });
    });
    let result = [...newArr];
    return result;
  };

  return (
    <DateContainer>
      <DatePicker
        locale={ko}
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        disabledKeyboardNavigation
        selectsRange
        monthsShown={2}
        minDate={new Date()}
        dateFormat="yyyy-MM-dd"
        excludeDateIntervals={newReser()}
        inline
        wrapperClassName="react-datepicker__header react-datepicker__day"
      />
      <DatePickerWrapperStyles />
    </DateContainer>
  );
};

const DateContainer = styled.div`
  width: 100%;
  z-index: 99;
  background-color: white;
`;

const DatePickerWrapperStyles = createGlobalStyle`

.react-datepicker {
  border: none;
  display: flex;
}
.react-datepicker__header  {
  background-color: #fff;
  border: none;
}
.react-datepicker__day-name,
.react-datepicker__day,
.react-datepicker__time-name {
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  vertical-align: middle;
  margin: 0.166rem;
}


.react-datepicker__day-name {
  color: rgba(0,0,0,0.5);
}

.react-datepicker__current-month {
  font-size: 15px;
  font-weight: 400;
  margin-bottom: .6rem;
}

.react-datepicker__month-container {
  margin: 0 5px;
}

.react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-year-read-view--down-arrow, .react-datepicker__navigation-icon::before {
  width: 6px;
  height: 6px;
  border-width: 1px 1px 0 0;
  border-color: #000;

}

.react-datepicker__day:hover,
.react-datepicker__month-text:hover,
.react-datepicker__quarter-text:hover,
.react-datepicker__year-text:hover {
  border-radius: 50%;
  background-color: #f0f0f0;
}

.react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range,
.react-datepicker__month-text--selected,
.react-datepicker__month-text--in-selecting-range,
.react-datepicker__month-text--in-range,
.react-datepicker__quarter-text--selected,
.react-datepicker__quarter-text--in-selecting-range,
.react-datepicker__quarter-text--in-range,
.react-datepicker__year-text--selected,
.react-datepicker__year-text--in-selecting-range,
.react-datepicker__year-text--in-range {
  border-radius: 50%;
  background-color: rgba(0,0,0,0.1);
  color: #000;
}


.react-datepicker__day--selected:hover, .react-datepicker__day--in-selecting-range:hover, .react-datepicker__day--in-range:hover,
.react-datepicker__month-text--selected:hover,
.react-datepicker__month-text--in-selecting-range:hover,
.react-datepicker__month-text--in-range:hover,
.react-datepicker__quarter-text--selected:hover,
.react-datepicker__quarter-text--in-selecting-range:hover,
.react-datepicker__quarter-text--in-range:hover,
.react-datepicker__year-text--selected:hover,
.react-datepicker__year-text--in-selecting-range:hover,
.react-datepicker__year-text--in-range:hover {
  border-radius: 50%;
  background-color: #000;
  color: #fff;
}
.react-datepicker__day--keyboard-selected,
.react-datepicker__month-text--keyboard-selected,
.react-datepicker__quarter-text--keyboard-selected,
.react-datepicker__year-text--keyboard-selected {
  border-radius: 0.3rem;
  background-color: rgba(0,0,0,0.1);
  color: #000;
}
.react-datepicker__day--keyboard-selected:hover,
.react-datepicker__month-text--keyboard-selected:hover,
.react-datepicker__quarter-text--keyboard-selected:hover,
.react-datepicker__year-text--keyboard-selected:hover {
  border-radius: 50%;
  background-color: rgba(0,0,0,0.1);
}
.react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range,
.react-datepicker__month-text--in-range,
.react-datepicker__quarter-text--in-range,
.react-datepicker__year-text--in-range),
.react-datepicker__month-text--in-selecting-range:not(.react-datepicker__day--in-range,
.react-datepicker__month-text--in-range,
.react-datepicker__quarter-text--in-range,
.react-datepicker__year-text--in-range),
.react-datepicker__quarter-text--in-selecting-range:not(.react-datepicker__day--in-range,
.react-datepicker__month-text--in-range,
.react-datepicker__quarter-text--in-range,
.react-datepicker__year-text--in-range),
.react-datepicker__year-text--in-selecting-range:not(.react-datepicker__day--in-range,
.react-datepicker__month-text--in-range,
.react-datepicker__quarter-text--in-range,
.react-datepicker__year-text--in-range) {
  background-color: #000;
  color: #fff;
}

.react-datepicker__input-container {
  position: relative;
  display: inline-block;
  width: 100%;
  input {
    width: 59px;
    border: none;
    background-color: white;
    color: rgba(0,0,0,0.5);
    font-size: 14px;
    font-weight: 400;
  }
}

.react-datepicker__day--outside-month,
.react-datepicker__day--outside-month:hover
{
  background-color: white;
}

`;

export default Calender;
