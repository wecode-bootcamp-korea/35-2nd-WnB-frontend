import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DetailMainRightBooking from './DetailMainRightBooking';

const DetailMainRight = ({
  id,
  price,
  maximum_occupancy,
  onChange,
  startDate,
  endDate,
  detailNavBtn,
  days,
  setDays,
  totalPee,
  setTotalPee,
  guests,
  setGuests,
  goToBooking,
  newFormatDate,
  reservations,
}) => {
  let [isToggle, setIsToggle] = useState(false);

  useEffect(() => {
    setTotalPee(price * days);
  }, [days, price]);

  useEffect(() => {
    setDays(1);
  }, [startDate]);

  return (
    <MainRightWraps>
      <BookingContainer detailNavBtn={detailNavBtn}>
        <div>
          <BookingContainerH1>
            {price.toLocaleString('ko-KR')} 원
            <BookingContainerSpan>/박</BookingContainerSpan>
          </BookingContainerH1>
        </div>
        <DetailMainRightBooking
          isToggle={isToggle}
          setIsToggle={setIsToggle}
          guests={guests}
          maximum_occupancy={maximum_occupancy}
          setGuests={setGuests}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          setDays={setDays}
          newFormatDate={newFormatDate}
          days={days}
          reservations={reservations}
        />
        <BookingBtn
          onClick={() => {
            goToBooking();
          }}
        >
          예약하기
        </BookingBtn>
        <BookingBill>
          <p>예약 확정 전에는 요금이 청구되지 않습니다.</p>
          <BookingBillChild>
            <span>
              {price.toLocaleString('ko-KR')} 원 x {endDate ? days : 1}박
            </span>
            <span>{(price * days).toLocaleString('ko-KR')} 원</span>
          </BookingBillChild>
          <BookingBillTotal>
            <BookingBillTotalSpan>총 합계</BookingBillTotalSpan>
            <sBookingBillTotalSpan>
              ₩{totalPee.toLocaleString('ko-KR')} 원
            </sBookingBillTotalSpan>
          </BookingBillTotal>
        </BookingBill>
      </BookingContainer>
    </MainRightWraps>
  );
};

const MainRightWraps = styled.div`
  position: relative;
  flex: 1;
  margin-left: 70px;
`;

const BookingContainer = styled.div`
  position: sticky;
  top: 150px;
  width: 100%;
  padding: 25px;
  border-radius: 15px;
  border: 1px solid #eee;
  box-shadow: 3px 3px 3px #eee;
  transition: 0.5s;
  display: ${props => (props.detailNavBtn ? 'none' : 'block')};
`;

const BookingContainerH1 = styled.h1`
  font-size: 22px;
  font-weight: 600;
  padding-bottom: 10px;
`;

const BookingContainerSpan = styled.span`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 400;
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

const BookingBill = styled.div`
  width: 100%;

  p {
    margin-bottom: 15px;
    font-size: 14px;
    font-weight: 400;
    color: rgb(34, 34, 34);
    text-align: center;
    line-height: 50px;
  }
`;

const BookingBillChild = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  span:nth-child(1) {
    font-size: 16px;
    font-weight: 400;
    color: rgb(113, 113, 113);
    line-height: 20px;
    text-decoration: underline;
  }
  span:nth-child(2) {
    font-size: 16px;
    font-weight: 400;
    color: rgb(34, 34, 34);
    line-height: 20px;
  }
`;

const BookingBillTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  border-top: 1px solid #eee;
`;

const BookingBillTotalSpan = styled.div`
  color: rgb(34, 34, 34);
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
`;

export default DetailMainRight;
