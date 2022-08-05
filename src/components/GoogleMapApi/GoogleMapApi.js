import React, { useCallback, useState } from 'react';
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoWindow,
} from '@react-google-maps/api';
import styled from 'styled-components';

function MyComponent({ center, MapStyle, markerData, zoom }) {
  const key = process.env.REACT_APP_MAPKEY;
  const [infoWindows, setInfoWindows] = useState(0);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: key,
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
          let { Price, center, imgUrl, name, description, id } = mapData;

          return (
            <>
              <Marker
                onClick={() => {
                  setInfoWindows(id);
                }}
                icon={`/images/marker_${
                  infoWindows === id ? 'black' : 'white'
                }.png`}
                key={idx}
                position={center}
                cursor="pointer"
                label={{
                  text: '' + Price,
                  color: `${infoWindows === id ? 'white' : 'black'}`,
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
              />

              {infoWindows === id && (
                <InfoWindow
                  position={center}
                  shouldFocus={true}
                  onCloseClick={() => {
                    setInfoWindows(0);
                  }}
                >
                  <InfoWindowStyle
                    onClick={() => {
                      alert('상세페이지 이동');
                    }}
                  >
                    <img src={imgUrl} alt="방사진" />
                    <p>{name}</p>

                    <span>{description}</span>
                    <p>₩{Price} / 박</p>
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
