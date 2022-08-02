import React, { useCallback, useState } from 'react';
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
} from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function MyComponent({ center, MapStyle, markerData, zoom }) {
  const navigate = useNavigate();
  const key = process.env.REACT_APP_MAPKEY;
  const [infoWindows, setInfoWindows] = useState(0);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAUo-MP_Un5CB4x9r2QxLxZSxW5-k8iBGc',
  });

  const [map, setMap] = useState(null);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={MapStyle}
      center={center}
      zoom={zoom}
      onUnmount={onUnmount}
    >
      {markerData ? (
        markerData.map((mapData, idx) => {
          let {
            room_price,
            room_image,
            room_name,
            description,
            room_id,
            latitude,
            longitude,
          } = mapData;

          return (
            <>
              <Marker
                onClick={() => {
                  setInfoWindows(room_id);
                }}
                icon={`/images/marker_${
                  infoWindows === room_id ? 'black' : 'white'
                }.png`}
                key={idx}
                position={{ lat: Number(latitude), lng: Number(longitude) }}
                cursor="pointer"
                label={{
                  text:
                    '' + Math.floor(room_price).toLocaleString('ko-KR') + '원',
                  color: `${infoWindows === room_id ? 'white' : 'black'}`,
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
              />

              {infoWindows === room_id && (
                <InfoWindow
                  position={{ lat: Number(latitude), lng: Number(longitude) }}
                  shouldFocus={true}
                  onCloseClick={() => {
                    setInfoWindows(0);
                  }}
                >
                  <InfoWindowStyle
                    onClick={() => {
                      navigate(`/detail/${room_id}`);
                    }}
                  >
                    <img src={room_image[0]} alt="방사진" />
                    <p>{room_name}</p>

                    <span>{description}</span>
                    <p>
                      ₩{Math.floor(room_price).toLocaleString('ko-KR')} 원 / 박
                    </p>
                  </InfoWindowStyle>
                </InfoWindow>
              )}
            </>
          );
        })
      ) : (
        <Marker position={center} icon="/images/icons/home.png" />
      )}
    </GoogleMap>
  ) : (
    <div />
  );
}

const InfoWindowStyle = styled.div`
  width: 300px;
  transition: 0.5s;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 200px;
  }

  p {
    font-size: 15px;
    font-weight: 600;
    line-height: 19px;
  }

  span {
    color: rgb(113, 113, 113);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 15px;
    line-height: 19px;
  }
`;

export default MyComponent;
