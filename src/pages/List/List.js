import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ItemCard from '../../components/Card/ItemCard';
import FilterButton from './FilterButton';
import ListPagination from './ListPagination';
import { BASE_URL } from '../../components/Config/Config';
import FilterModal from '../../components/FilterModal/FilterModal';
import MyComponent from '../../components/GoogleMapApi/GoogleMapApi';

const limit = 10;
const List = () => {
  const [roomData, setRoomData] = useState([]);
  const [countData, setCountData] = useState([]);
  const [isFilterModal, setIsFilterModal] = useState(false);
  const [offset, setOffset] = useState(`&offset=0&limit=10`);
  const roomCount = countData.length;
  const navigate = useNavigate();
  const location = useLocation();
  const target = { lat: 37.5178092, lng: 126.8500571 };
  const saveLocation = useRef();

  useEffect(() => {
    // fetch('/data/RoomData.json')
    fetch(`${BASE_URL}/rooms${location.search}`)
      .then(res => res.json())
      .then(data => setCountData(data.result));
  }, []);

  useEffect(() => {
    // fetch('/data/RoomData.json')
    fetch(`${BASE_URL}/rooms${location.search}${offset}`)
      .then(res => res.json())
      .then(data => setRoomData(data.result));
  }, [location.search]);

  useEffect(() => {
    saveLocation.current = location.search;
  }, []);

  const switchPage = index => {
    setOffset('');
    const offset = index * limit;
    const queryString = `${saveLocation.current}&offset=${offset}&limit=${limit}`;
    navigate(`/list${queryString}`);
  };

  const handleFilterModal = () => {
    setIsFilterModal(prev => !prev);
  };
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
              <FilterButton handleFilterModal={handleFilterModal} />
            </TopContent>
          </ListTop>
          <ListMid>
            {roomData.map(item => {
              return <ItemCard key={item.room_id} roomData={item} />;
            })}
          </ListMid>
          <ListPagination
            switchPage={switchPage}
            countData={countData}
            roomCount={roomCount}
          />
        </ItemList>
        {isFilterModal ? (
          <FilterModal
            handleFilterModal={handleFilterModal}
            isFilterModal={isFilterModal}
            setIsFilterModal={setIsFilterModal}
          />
        ) : null}
      </ListContent>
      <MapContainer>
        <MyComponent
          MapStyle={MapStyle}
          markerData={roomData}
          center={target}
          zoom={10}
        />
      </MapContainer>
    </>
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
  padding-top: 80px;
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
const MapContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 50%;
  height: 100vh;
`;
