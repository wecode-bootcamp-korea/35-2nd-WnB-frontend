import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import DetailTop from './components/DetailTop';
import DetailPhoto from './components/DetailPhoto';
import DetailMainLeft from './components/DetailMainLeft';
import DetailMainRight from './components/DetailMainRight';

import DetailMap from './components/DetailMap';
import DetailNotice from './components/DetailNotice';
import ModalWindow from '../../components/Modal/Modal';

const Detail = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [item, setItem] = useState([]);

  // const params = useParams();

  useEffect(() => {
    fetch(`/data/detailMockData2.json`)
      .then(response => response.json())
      .then(data => setItem(data[0]));
  }, []);

  const {
    name,
    address,
    detail_address,
    price,
    description,
    latitude,
    longitude,
    maximum_occupancy,
    bedroom,
    bathroom,
    bed,
    host,
    category,
    room_type,
    detail_images,
    facilities,
  } = item;

  return (
    room_type && (
      <>
        <Inner>
          <DetailTop
            room_name={name}
            category={category.name}
            address={address}
            detail_address={detail_address}
          />
          <DetailPhoto setModalIsOpen={setModalIsOpen} images={detail_images} />
          <DetailMain>
            <DetailMainLeft
              host={host}
              category={category.name}
              maximum_occupancy={maximum_occupancy}
              bedroom={bedroom}
              bathroom={bathroom}
              bed={bed}
              description={description}
              room_type={room_type.name}
              facilities={facilities}
            />
            <DetailMainRight
              price={price}
              maximum_occupancy={maximum_occupancy}
            />
          </DetailMain>

          <DetailMap
            lat={latitude}
            lng={longitude}
            address={address}
            detail_address={detail_address}
          />
          <DetailNotice />
        </Inner>
        <ModalWindow
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          modalStyle={modalStyle}
          contents={detail_images.map((els, idx) => {
            return <img key={idx} src={els} alt="1" />;
          })}
        />
      </>
    )
  );
};

const Inner = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`;

const DetailMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
`;

const modalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.45)',
    zIndex: 10,
  },

  content: {
    left: '0',
    top: '0',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    outline: 'none',
    zIndex: 10,
  },
};
export default Detail;
