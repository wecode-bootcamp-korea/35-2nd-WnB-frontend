import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import InfiniteScroll from './InfiniteScroll';
import ItemCard from '../../components/Card/ItemCard';
import MainCategory from './MainCategory';

const Main = () => {
  const [roomData, setRoomData] = useState([]);
  const [isFilterModal, setIsFilterModal] = useState(false);
  // const [scrollOptions, setScrollOptions] = useState({
  //   childLength: 4, // 첫 렌더될 아이템의 개수
  //   fullHeight: 0, // 총 스크롤의 크기
  // });

  useEffect(() => {
    fetch('/data/mainMockData.json')
      .then(res => res.json())
      .then(data => setRoomData(data));
  }, []);

  const handleFilterModal = () => {
    setIsFilterModal(prev => !prev);
  };

  return (
    <>
      <MainCategory handleFilterModal={handleFilterModal} />
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
