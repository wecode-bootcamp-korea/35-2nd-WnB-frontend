import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import Location from './modal/Location';
import Calender from './modal/Calender';
import GuestType from './modal/GuestType';
import { BASE_URL } from '../Config/Config';

const Search = ({
  startDate,
  endDate,
  location,
  guest,
  setLocation,
  onChange,
  increseNum,
  decreseNum,
  modalRef,
  setToggleNavbar,
}) => {
  const [dateModalIsOpen, setDateModalIsOpen] = useState(false);
  const [locationModalIsOpen, setLocationModalIsOpen] = useState(false);
  const [guestModalIsOpen, setGuestModalIsOpen] = useState(false);
  const [currentId, setCurrentId] = useState(0);
  const navigate = useNavigate();
  // const modalRef = useRef();

  const clickHandler = id => {
    setCurrentId(id);
  };

  const disabled = guest > 0;

  const overLayClick = e => {
    if (modalRef.current === e.target) {
      setDateModalIsOpen(false);
      setLocationModalIsOpen(false);
      setGuestModalIsOpen(false);
      setCurrentId(0);
      setToggleNavbar(true);
    }
  };

  const leftPad = value => {
    if (value >= 10) {
      return value;
    }

    return `0${value}`;
  };

  const toStringByFormatting = (date, delimiter) => {
    const year = date.getFullYear();
    const month = leftPad(date.getMonth() + 1);
    const day = leftPad(date.getDate());

    return [year, month, day].join(delimiter);
  };

  const toSearchUserInfo = e => {
    e.stopPropagation();

    const startDay = startDate
      ? `&check_in=${toStringByFormatting(startDate, '-')}`
      : '';
    const endDay = endDate
      ? `&check_out=${toStringByFormatting(endDate, '-')}`
      : '';
    const selectLocation = location ? `&address=${location}` : '';
    const totalGuest = guest ? `&maximum_occupancy=${guest}` : '';

    navigate(`/list?${startDay}${endDay}${selectLocation}${totalGuest}`);

    fetch(
      `${BASE_URL}/rooms?${startDay}${endDay}${selectLocation}${totalGuest}`
    )
      .then(res => res.json())
      .then(data => console.log(data));
    setDateModalIsOpen(false);
    setLocationModalIsOpen(false);
    setGuestModalIsOpen(false);
    setCurrentId(0);
    setToggleNavbar(true);
  };

  const ModalComponent = {
    1: (
      <Location
        startDate={startDate}
        endDate={endDate}
        setLocation={setLocation}
      />
    ),
    2: <Calender startDate={startDate} endDate={endDate} onChange={onChange} />,
    3: (
      <GuestType
        guest={guest}
        increseNum={increseNum}
        decreseNum={decreseNum}
        disabled={disabled}
      />
    ),
  };

  return (
    <SearchSection>
      {locationModalIsOpen || dateModalIsOpen || guestModalIsOpen ? (
        <ModalOverLay onClick={overLayClick} ref={modalRef} />
      ) : null}
      <SearchBarContainer>
        <WrapperLocationContainer
          className={currentId === 1 ? 'is_open' : null}
          onClick={() => {
            setLocationModalIsOpen(true);
            clickHandler(1);
          }}
        >
          <DatePickerLabel>여행지</DatePickerLabel>
          <SearchBarSpan>{location}</SearchBarSpan>
        </WrapperLocationContainer>
        <WrapperDatePicker>
          <WrapperDatePickerInput
            className={currentId === 2 && !endDate ? 'is_open' : null}
            onClick={() => {
              setDateModalIsOpen(true);
              clickHandler(2);
            }}
          >
            <DatePickerLabel>체크인</DatePickerLabel>
            <SearchBarSpan>
              {startDate
                ? `${startDate.getMonth() + 1}월 ${startDate.getDate()}일`
                : '날짜 선택'}
            </SearchBarSpan>
          </WrapperDatePickerInput>
          <WrapperDatePickerInput
            className={currentId === 2 && endDate ? 'is_open' : null}
            onClick={() => {
              setDateModalIsOpen(true);
              clickHandler(2);
            }}
          >
            <DatePickerLabel>체크아웃</DatePickerLabel>
            <SearchBarSpan>
              {endDate
                ? `${endDate.getMonth() + 1}월 ${endDate.getDate()}일`
                : '날짜 선택'}
            </SearchBarSpan>
          </WrapperDatePickerInput>
        </WrapperDatePicker>
        <WrapperGuestContainer
          className={currentId === 3 ? 'is_open' : null}
          onClick={() => {
            setGuestModalIsOpen(true);
            clickHandler(3);
          }}
        >
          <DatePickerLabel>여행자</DatePickerLabel>
          <SearchBarSpan>
            {guest !== 0 ? `성인 ${guest}명` : '게스트 추가'}
          </SearchBarSpan>
          <IconContainer onClick={toSearchUserInfo}>
            <i class="bx bx-search" />
          </IconContainer>
        </WrapperGuestContainer>
        {ModalComponent[currentId]}
      </SearchBarContainer>
    </SearchSection>
  );
};

export default Search;

const SearchSection = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  width: 100vw;
`;

const WrapperDatePicker = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  width: fit-content;
  height: auto;
`;

const SearchBarContainer = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  position: relative;
  width: fit-content;
  height: auto;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 32.5px;
`;

const WrapperDatePickerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 130px;
  height: 65px;
  padding: 14px 24px;
  &.is_open {
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
  :hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  border-radius: 32.5px;
`;

const WrapperLocationContainer = styled(WrapperDatePickerInput)`
  width: 312px;
  height: 65px;
  border-radius: 32.5px;
`;

const WrapperGuestContainer = styled(WrapperDatePickerInput)`
  position: relative;
  width: 250px;
  height: 65px;
  border-radius: 32.5px;
`;

const DatePickerLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  padding-left: 3px;
`;

const SearchBarSpan = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
`;

const IconContainer = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  position: absolute;
  top: 7.5px;
  right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #7a0bc0;
  color: white;
  font-size: 20px;
  cursor: pointer;
  z-index: 106;
`;

const ModalOverLay = styled.div`
  position: absolute;
  top: 170px;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
`;

const ModalOverLayWhite = styled(ModalOverLay)`
  background-color: none;
`;
