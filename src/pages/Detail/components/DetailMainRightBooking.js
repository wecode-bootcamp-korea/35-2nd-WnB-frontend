import React from 'react';
import { API } from '../../../components/Config/Config';
import styled from 'styled-components';

const DetailMainRightBooking = ({
  isToggle,
  setIsToggle,
  guests,
  maximum_occupancy,
  setGuests,
  id,
  totalPee,
}) => {
  let CheckedUpGuests = guests < maximum_occupancy;
  let CheckedDownGuests = guests <= 1;

  const letOrder = () => {
    fetch(`${API.booking}`, {
      method: 'POST',
      body: JSON.stringify({
        check_in: '2022-01-01',
        check_out: '2022-01-02',
        people: guests,
        room: id,
        price: totalPee,
      }),
    }).then(response => response.json());
    // .then(data => {console.log(data)});
  };

  const confirm = () => {
    const result = window.confirm('예약을 진행 하시겠습니디까');
    result && letOrder();
  };

  return (
    <>
      <Container>
        <StartDate>
          <DateSpan>체크인</DateSpan>
        </StartDate>
        <EndDate>
          <DateSpan>체크아웃</DateSpan>
        </EndDate>
        <Guests
          onClick={() => {
            setIsToggle(prev => !prev);
          }}
        >
          <DateSpan>인원</DateSpan>
          <Guestsfirst>게스트 {guests}명 </Guestsfirst>
          <i className={`fa-solid fa-angle-${!isToggle ? 'down' : 'up'}`} />
        </Guests>
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
      <BookingBtn
        onClick={() => {
          confirm();
        }}
      >
        예약하기
      </BookingBtn>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100px;
  margin-bottom: 30px;
  border: 1px solid #c0c0c0;
  border-radius: 10px;
`;

const StartDate = styled.div`
  position: relative;
  width: 50%;
  height: 50%;
  border-right: 1px solid #c0c0c0;
  border-bottom: 1px solid #c0c0c0;
`;

const EndDate = styled.div`
  position: relative;
  width: 50%;
  height: 50%;
  border-bottom: 1px solid #c0c0c0;
`;

const DateSpan = styled.span`
  position: absolute;
  top: 8px;
  left: 12px;
  color: rgb(34, 34, 34);
  font-size: 12px;
  font-weight: 500;
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

const BookingBtn = styled.span`
  display: inline-block;
  width: 100%;
  height: 50px;
  background-color: ${props => props.theme.style.symbol};
  border-radius: 10px;
  color: white;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
`;

export default DetailMainRightBooking;
