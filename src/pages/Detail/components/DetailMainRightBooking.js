import React, { useEffect, useState } from 'react';
import ModalWindow from '../../../components/Modal/Modal';
import Calender from './Calender';
import styled from 'styled-components';

const DetailMainRightBooking = ({
  isToggle,
  setIsToggle,
  guests,
  maximum_occupancy,
  setGuests,
  onChange,
  startDate,
  endDate,
  setDays,
  newFormatDate,
  reservations,
}) => {
  const [dateModalIsOpen, setDateModalIsOpen] = useState(false);
  const [rightDateOpen, setRightDateOpen] = useState(false);
  let CheckedUpGuests = guests < maximum_occupancy;
  let CheckedDownGuests = guests <= 1;

  useEffect(() => {
    setDays(newDays(startDate, endDate));
  }, [endDate]);

  const switchModal = () => {
    setRightDateOpen(prev => !prev);
    setIsToggle(false);
  };

  const newDays = (startDay, endDay) => {
    let toDate = new Date(startDay);
    let fromDate = new Date(endDay);

    return Math.ceil(
      (fromDate.getTime() - toDate.getTime()) / (1000 * 3600 * 24)
    );
  };

  return (
    <Container>
      <StartDate
        onClick={() => {
          switchModal();
        }}
      >
        <DateSpan>체크인</DateSpan>

        {startDate && <DateP>{newFormatDate(startDate)}</DateP>}
      </StartDate>
      <EndDate
        onClick={() => {
          switchModal();
        }}
      >
        <DateSpan>체크아웃</DateSpan>
        {endDate && <DateP>{newFormatDate(endDate)}</DateP>}
      </EndDate>
      {rightDateOpen && (
        <RightCalender>
          <Calender
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            reservations={reservations}
          />
          <CloseBtn
            onClick={() => {
              switchModal();
            }}
          >
            닫기
          </CloseBtn>
        </RightCalender>
      )}
      <ModalWindow
        modalIsOpen={dateModalIsOpen}
        setModalIsOpen={setDateModalIsOpen}
      />
      <GuestContainer>
        <Guests
          onClick={() => {
            setIsToggle(prev => !prev);
          }}
        >
          <DateSpan>인원</DateSpan>
          <Guestsfirst>게스트 {guests}명 </Guestsfirst>
          <i className={`fa-solid fa-angle-${!isToggle ? 'down' : 'up'}`} />
        </Guests>
      </GuestContainer>
      {isToggle && (
        <Guest>
          <span>성인</span>
          <GuestsBtns>
            <GuestsBtn
              disabled={CheckedDownGuests}
              onClick={() => {
                setGuests(guests - 1);
              }}
            >
              <i className="fa-solid fa-angle-down" />
            </GuestsBtn>
            <div>
              <GuestChild>{guests}</GuestChild>
            </div>
            <GuestsBtn
              disabled={!CheckedUpGuests}
              onClick={() => {
                setGuests(guests + 1);
              }}
            >
              <i className="fa-solid fa-angle-up" />
            </GuestsBtn>
          </GuestsBtns>
          <GuestChild>
            이 숙소의 최대 숙박 인원은 {maximum_occupancy}명(유아 포함)입니다.
            반려동물을 동반하는 경우, 호스트에게 알려주세요.
            <GuestChildSpan
              onClick={() => {
                setIsToggle(prev => !prev);
              }}
            >
              닫기
            </GuestChildSpan>
          </GuestChild>
        </Guest>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100px;
  margin-bottom: 30px;
  border-radius: 0px 0px 10px 10px;
  background-color: white;
`;

const StartDate = styled.div`
  position: relative;
  width: 50%;
  height: 50%;
  border-right: 1px solid #c0c0c0;
  border-bottom: 1px solid #c0c0c0;
  z-index: 999;
  border-radius: 10px 0px 0px 0px;
  background-color: white;
  border: 1px solid #eee;
`;

const EndDate = styled.div`
  position: relative;
  width: 50%;
  height: 50%;
  border-bottom: 1px solid #c0c0c0;
  z-index: 999;
  background-color: white;
  border-radius: 0px 10px 0px 0px;
  background-color: white;
  border: 1px solid #eee;
`;

const DateSpan = styled.span`
  position: absolute;
  top: 8px;
  left: 12px;
  color: rgb(34, 34, 34);
  font-size: 12px;
  font-weight: 500;
`;
const DateP = styled.p`
  position: absolute;
  bottom: 5px;
  left: 10px;
`;

const Guests = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  padding: 25px 35px 10px 15px;

  i {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Guestsfirst = styled.span`
  color: rgb(34, 34, 34);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`;

const Guest = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 17px;
  border-radius: 10px;
  border: 1px solid #eee;
  background-color: white;
  box-shadow: 1px 1px 1px 1px #eee;
  z-index: 9;
`;

const GuestsBtns = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 16px;
    font-weight: 400;
  }
`;

const GuestsBtn = styled.button`
  width: 32px;
  height: 32px;
  border: 1px solid #eee;
  border-radius: 50%;
  background-color: white;
`;

const GuestChild = styled.span`
  padding-top: 20px;
  font-size: 12px;
  line-height: 15px;
  font-weight: 400;
`;

const GuestChildSpan = styled.span`
  float: right;
  margin-top: 30px;
  font-size: 15px;
  line-height: 18px;
  font-weight: 700;
  cursor: pointer;
`;

const RightCalender = styled.div`
  position: absolute;
  right: -5px;
  padding: 50px 25px 70px 25px;
  border: 1px solid #eee;
  background-color: white;
  box-shadow: 1px 1px 1px 1px #eee;
  z-index: 998;
`;

const GuestContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  border-radius: 0px 0px 10px 10px;
  border: 1px solid #eee;
  border-top: none;
`;

const CloseBtn = styled.button`
  position: absolute;
  right: 50px;
  bottom: 10px;
  color: white;
  background-color: black;
  border: none;
  font-size: 15px;
  font-weight: 800;
  line-height: 30px;
  padding: 5px 15px;
  letter-spacing: 2px;
`;

export default DetailMainRightBooking;
