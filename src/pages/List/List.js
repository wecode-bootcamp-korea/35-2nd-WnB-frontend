import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ItemCard from '../../components/Card/ItemCard';
import FilterButton from './FilterButton';

const List = () => {
  const [roomData, setRoomData] = useState([]);
  const roomCount = roomData.length;

  useEffect(() => {
    fetch('/data/RoomData.json')
      .then(res => res.json())
      .then(data => setRoomData(data));
  }, []);

  return (
    <ListContent>
      <ItemList>
        <ListTop>
          <TopContent>
            <span>숙소 {roomCount}개</span>
            <FilterButton />
          </TopContent>
        </ListTop>
        <ListMid>
          {roomData.map(item => {
            return <ItemCard key={item.host_id} roomData={item} />;
          })}
        </ListMid>
      </ItemList>
    </ListContent>
  );
};

export default List;

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
