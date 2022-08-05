import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ItemCard from '../../components/Card/ItemCard';
import MyComponent from '../../components/GoogleMapApi/GoogleMapApi';

const List = () => {
  const [roomData, setRoomData] = useState([]);
  const [markerData, setMarkerData] = useState([]);
  const roomCount = roomData.length;
  const target = { lat: 37.3721495, lng: 126.5696915 };

  useEffect(() => {
    fetch('/data/RoomData.json')
      .then(res => res.json())
      .then(data => setRoomData(data));

    fetch('/data/listMapData.json')
      .then(res => res.json())
      .then(data => setMarkerData(data));
  }, []);

  const MapStyle = {
    width: '100%',
    height: '100%',
    right: '0',
    top: '0',
  };

  return (
    <>
      <ListContent>
        <ItemList>
          <ListTop>
            <TopContent>
              <span>숙소 {roomCount}개</span>
              <FilterBtn>
                <span>
                  <img src="/images/filter.png" alt="filter" />
                  필터
                </span>
              </FilterBtn>
            </TopContent>
          </ListTop>
          <ListMid>
            {roomData.map(item => {
              return <ItemCard key={item.host_id} roomData={item} />;
            })}
          </ListMid>
        </ItemList>
      </ListContent>
      <MapContainer>
        <MyComponent
          MapStyle={MapStyle}
          markerData={markerData}
          center={target}
          zoom={11}
        />
      </MapContainer>
    </>
  );
};

const ListContent = styled.main`
  display: flex;
  width: 100%;
`;

const ItemList = styled.div`
  min-height: calc(100vh - 80px);
  width: 50%;
  @media (max-width: 950px) {
    width: 100%;
  }
`;

const ListTop = styled.div`
  padding-top: 24px;
  padding-bottom: 8px;
`;

const TopContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;

const FilterBtn = styled.button`
  display: inline-flex;
  background-color: #fff;
  padding: 10px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;

  span {
    display: inline-flex;
    align-items: center;
    padding: 0 16px;
    font-weight: 600;
    font-family: Pretendard Variable;

    img {
      width: 16px;
      margin-right: 4px;
    }
  }
`;

const ListMid = styled.div`
  padding: 0 24px;
  margin-top: 16px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 40px 24px;
  @media (max-width: 550px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const MapContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 50%;
  height: 100vh;
`;

export default List;
