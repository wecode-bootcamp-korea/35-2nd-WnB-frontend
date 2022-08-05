import React from 'react';
import styled from 'styled-components';
import MyComponent from '../../../components/GoogleMapApi/GoogleMapApi';

const DetailMap = ({ lat, lng, address, detail_address }) => {
  const center = {
    lat: Number(lat),
    lng: Number(lng),
  };

  const MapStyle = {
    width: '100%',
    height: '500px',
  };

  return (
    <DetailMaps>
      <MyComponent center={center} MapStyle={MapStyle} zoom={20} />

      <p>
        {detail_address}, {address}
      </p>
    </DetailMaps>
  );
};

const DetailMaps = styled.div`
  width: 100%;
  border-top: 1px solid #eee;
  padding: 40px 10px;
  margin-bottom: 30px;

  h1 {
    font-size: 22px;
    line-height: 26px;
    font-weight: 600;
  }
  p {
    margin-top: 50px;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
  }
`;

export default DetailMap;
