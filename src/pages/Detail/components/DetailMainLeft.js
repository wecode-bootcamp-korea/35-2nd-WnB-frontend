import React from 'react';
import styled from 'styled-components';
import Calender from './Calender';

const DetailMainLeft = ({
  host,
  maximum_occupancy,
  bedroom,
  bed,
  bathroom,
  category,
  room_type,
  description,
  facilities,
  onChange,
  startDate,
  endDate,
  reservations,
}) => {
  let { first_name, last_name, profile_img } = host;

  const modal = () => {
    return alert('modal');
  };

  return (
    <MainLeftContainer>
      <HostDetail>
        <HostDetailTop>
          <div>
            <HostName>
              {first_name} {last_name} 님이 호스팅하는 {category}
            </HostName>
            <HostRoom>
              <li>최대 인원 {maximum_occupancy} 명</li>
              <li>침식 {bedroom} 개</li>
              <li>침대 {bed} 개</li>
              <li>욕실 {bathroom} 개</li>
            </HostRoom>
          </div>
          <HostPhoto>
            <img src={profile_img} alt="프로필" />
          </HostPhoto>
        </HostDetailTop>
      </HostDetail>
      <HostBox>
        <ArticleWrap>
          <i className="fa-solid fa-medal" />
          <ArticleWrapTxt>
            <h3>{last_name} 님은 우수한 호스트 이십니다.</h3>
            <p>
              "풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서 편안히
              머무를 수 있도록 최선을 다하는 호스트입니다."
            </p>
          </ArticleWrapTxt>
        </ArticleWrap>
      </HostBox>
      <HostBox>
        <AirCover>
          <span>에어</span>커버
        </AirCover>
        <BoxTxt>
          모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지 않은
          경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호 프로그램이
          포함됩니다.
        </BoxTxt>

        <BottonSpan
          onClick={() => {
            modal();
          }}
        >
          더 알아보기
        </BottonSpan>
      </HostBox>
      <HostBox>
        <RoomOptionStyle>숙소 정보</RoomOptionStyle>
        <BoxTxt>{description}</BoxTxt>
      </HostBox>
      <HostBox>
        <RoomOptionStyle>숙박 장소</RoomOptionStyle>
        <DetailRoomInfoStyle>
          <DetailRoomInfoBox>
            <i className="fa-solid fa-bed" />
            <h3>{room_type}</h3>
            <p>침실 :{bedroom}</p>
          </DetailRoomInfoBox>
        </DetailRoomInfoStyle>
      </HostBox>

      <HostBox>
        <RoomOptionStyle>숙소 편의시설</RoomOptionStyle>
        <Option>
          {facilities.map((els, idx) => {
            return (
              <OptionChild key={idx}>
                <img
                  src={`/images/icons/${FACILDATE[els.id]}.png`}
                  alt="icon"
                />
                <p>{els.name}</p>
              </OptionChild>
            );
          })}
        </Option>
      </HostBox>
      <HostBox>
        <Calender
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          reservations={reservations}
        />
      </HostBox>
    </MainLeftContainer>
  );
};

const MainLeftContainer = styled.div`
  position: relative;
  flex: 2;
`;

const HostDetail = styled.div`
  width: 100%;
`;

const HostDetailTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 50px;
`;

const HostName = styled.h2`
  margin-bottom: 10px;
  font-size: 22px;
  font-weight: 900px;
  line-height: 26px;
`;

const HostRoom = styled.ol`
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;

  li {
    float: left;
    color: rgb(34, 34, 34);
  }

  li:not(:last-child):after {
    content: ' · ';
    padding: 0 5px;
  }
`;

const HostPhoto = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

const HostBox = styled.div`
  :not(:last-child) {
    border-bottom: 1px solid rgb(221, 221, 221);
    padding: 30px 0px;
    margin: 0px 10px;
    background-color: white;
  }
`;

const ArticleWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  :not(:last-child) {
    margin-bottom: 20px;
  }

  i {
    margin-right: 15px;
    font-size: 23px;
  }
`;

const ArticleWrapTxt = styled.div`
  h3 {
    padding-bottom: 7px;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
  }
  p {
    color: rgb(113, 113, 113);
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    word-break: keep-all;
  }
`;

const AirCover = styled.h1`
  padding-bottom: 20px;
  font-size: 30px;
  font-weight: 800;

  span {
    color: pink;
    background-color: none;
  }
`;

const BoxTxt = styled.p`
  padding-bottom: 16px;
  color: rgb(113, 113, 113);
  line-height: 20px;
`;

const BottonSpan = styled.span`
  font-size: 16px;
  text-decoration: underline;
  cursor: pointer;
`;

const DetailRoomInfoStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

const DetailRoomInfoBox = styled.div`
  width: 50%;
  margin: 0px 20px 0px 0px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  padding: 25px;

  i {
    padding-bottom: 20px;
    font-size: 20px;
  }

  h3 {
    padding-bottom: 20px;
    font-size: 20px;
    line-height: 25px;
  }
`;

const RoomOptionStyle = styled.h3`
  color: rgb(34, 34, 34);
  padding: 20px 0;
  font-size: 22px;
  font-weight: 600;
  line-height: 26px;
`;

const Option = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
`;

const OptionChild = styled.div`
  display: flex;
  align-items: center;
  width: 50%;

  img {
    float: left;
    margin-right: 10px;
    width: 20px;
  }

  p {
    float: left;
    color: rgb(34, 34, 34);
    line-height: 30px;
    font-size: 16px;
    vertical-align: middle;
  }
`;

export default DetailMainLeft;

let FACILDATE = {
  무선인터넷: 'wifi',
  주방: 'kichen',
  세탁기: 'washing',
  에어컨: 'air',
  난방: 'heat',
  건조기: 'dryer',
  수영장: 'pool',
  자쿠지: 'jaku',
  '건물 내 무료 주차': 'parking',
  '아기 침대': 'baby',
  헬스장: 'gym',
  '바비큐 그릴': 'grill',
  아침식사: 'food',
  '실내 벽난로': 'fire',
  '흡연 가능': 'ciga',
};
