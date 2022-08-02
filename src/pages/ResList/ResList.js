import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BASE_URL } from '../../components/Config/Config';

const ResList = () => {
  const [roomData, setRoomData] = useState();
  const navigate = useNavigate();

  console.log(roomData);

  const goToDetail = index => {
    navigate(`/resDetail/${index}`);
  };

  useEffect(() => {
    fetch(`${BASE_URL}/reservations`, {
      method: 'GET',
      headers: { authorization: localStorage.getItem('Token') },
    })
      .then(res => res.json())
      .then(data => setRoomData(data.RESULT));
  }, []);

  return (
    <ListContainer>
      <ListTit>여행</ListTit>
      <ListSubTit>예정된 일정</ListSubTit>
      <ResWrap>
        {roomData &&
          roomData.map(
            ({
              reservation_number,
              room,
              check_in,
              check_out,
              address,
              detail_address,
              images,
            }) => {
              return reservation_number ? (
                <ResItem key={reservation_number}>
                  <ResLinkToDetail
                    onClick={() => goToDetail(reservation_number)}
                  >
                    <ResImg>
                      <img src={images} alt={room} />
                    </ResImg>
                    <ResInfo>
                      <ResAddress>{room}</ResAddress>
                      <p>{detail_address}</p>
                      <p>
                        {check_in} ~ {check_out}
                      </p>
                    </ResInfo>
                  </ResLinkToDetail>
                </ResItem>
              ) : (
                <p>예약된 내역이 없습니다.</p>
              );
            }
          )}
      </ResWrap>
      <ResHelp>
        <p>
          예약 내역을 찾으실 수 없나요?{' '}
          <a href="https://www.airbnb.co.kr/help?audience=guest">
            도움말 센터 방문하기
          </a>
        </p>
      </ResHelp>
    </ListContainer>
  );
};

export default ResList;

const ListContainer = styled.div`
  padding: 0 80px;
`;

const ListTit = styled.h2`
  padding: 36px 0 24px;
  font-size: 32px;
  font-weight: 600;
`;

const ListSubTit = styled.h3`
  padding: 24px 0;
  font-size: 22px;
  font-weight: 600;
`;

const ResWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  min-height: 50vh;
  padding-bottom: 48px;
`;

const ResItem = styled.div``;

const ResLinkToDetail = styled.div`
  display: flex;
  align-items: center;
  color: #222;
  text-decoration: none;
`;

const ResImg = styled.div`
  margin-right: 16px;
  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const ResInfo = styled.p`
  color: #717171;
  line-height: 20px;
`;

const ResAddress = styled.p`
  color: #222;
  font-weight: 600;
`;

const ResHelp = styled.div`
  padding: 24px 0 36px;
  border-top: 1px solid #ddd;
  a {
    color: #222;
    font-weight: 600;
  }
`;
