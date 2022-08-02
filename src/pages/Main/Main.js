import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
// import InfiniteScroll from './InfiniteScroll';
import ItemCard from '../../components/Card/ItemCard';
import MainCategory from './MainCategory';
import FilterModal from '../../components/FilterModal/FilterModal';
import { BASE_URL } from '../../components/Config/Config';

const Main = () => {
  const [roomData, setRoomData] = useState([]);
  const [isFilterModal, setIsFilterModal] = useState();
  // const [scrollOptions, setScrollOptions] = useState({
  //   childLength: 30, // 첫 렌더될 아이템의 개수
  //   fullHeight: 0, // 총 스크롤의 크기
  // });
  const [currentTab, setCurrentTab] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${BASE_URL}/rooms${location.search}`)
      .then(res => res.json())
      .then(data => setRoomData(data.result));
    // navigate('/');
  }, [location.search]);

  const selectMenuHandler = index => {
    setCurrentTab(index);
  };

  const goToNavigate = id => {
    navigate(`/?&category=${id}`);
  };

  const handleCategory = id => {
    selectMenuHandler(id);
    goToNavigate(id);

    // fetch(`${BASE_URL}/rooms${location.search}`)
    //   .then(res => res.json())
    //   .then(data => setRoomData(data.result));
  };

  // useEffect(() => {
  //   handleCategory();
  // }, [location.search]);

  const handleFilterModal = () => {
    setIsFilterModal(prev => !prev);
  };

  return (
    // <InfiniteScroll
    //   roomData={roomData}
    //   setRoomData={setRoomData}
    //   scrollOptions={scrollOptions}
    //   setScrollOptions={setScrollOptions}
    // >
    <>
      <MainCategory
        handleFilterModal={handleFilterModal}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        selectMenuHandler={selectMenuHandler}
        handleCategory={handleCategory}
      />
      <MainContent>
        {roomData.length === 0 ? (
          <div>로딩중</div>
        ) : (
          roomData.map(item => {
            return <ItemCard key={item.room_id} roomData={item} />;
          })
        )}
      </MainContent>
      {isFilterModal ? (
        <FilterModal
          handleFilterModal={handleFilterModal}
          isFilterModal={isFilterModal}
          setIsFilterModal={setIsFilterModal}
        />
      ) : null}
    </>
    // </InfiniteScroll>
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
