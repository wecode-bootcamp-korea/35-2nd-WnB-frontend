import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ItemCard from '../../components/Card/ItemCard';
import MainCategory from './MainCategory';

const Main = () => {
  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    fetch('/data/RoomData.json')
      .then(res => res.json())
      .then(data => setRoomData(data));
  }, []);

  return (
    <>
      <MainCategory />
      <MainContent>
        {roomData.map(item => {
          return <ItemCard key={item.id} roomData={item} />;
        })}
      </MainContent>
    </>
  );
};

export default Main;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 40px 24px;
  margin: 24px auto 40px;
  padding: 20px 80px 0;
  @media (max-width: 1120px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding: 0 40px;
  }
  @media (max-width: 950px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 0 24px;
  }
`;
