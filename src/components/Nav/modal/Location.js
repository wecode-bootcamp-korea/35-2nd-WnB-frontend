import React from 'react';
import styled from 'styled-components';

const Location = ({ setLocation }) => {
  return (
    <ModalLocation>
      <LocationContainer>
        <LocationDoc>지역을 선택해주세요</LocationDoc>
        <LocationMain>
          <ImgContainer>
            <LocationImg
              src="../images/euro.webp"
              alt="location"
              onClick={() => setLocation('경기도')}
            />
            <ImgDoc>경기도</ImgDoc>
          </ImgContainer>
          <ImgContainer>
            <LocationImg
              src="../images/easy.jpeg"
              alt="location"
              onClick={() => setLocation('인천')}
            />
            <ImgDoc>인천</ImgDoc>
          </ImgContainer>
        </LocationMain>
      </LocationContainer>
    </ModalLocation>
  );
};

export default Location;

const LocationContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'flex-start')}
  padding: 16px 32px;
  gap: 1.5rem;
`;

const LocationDoc = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

const LocationMain = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  gap: 1rem;
`;

const ImgContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'flex-start')}
  gap: 1rem;
`;

const LocationImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  transition: border 0.25s 0.25s;
  cursor: pointer;
  &:hover {
    border: 1px solid #000;
  }
`;

const ImgDoc = styled(LocationDoc)`
  font-weight: 400;
`;

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  width: auto;
  height: auto;
  border-radius: 2rem;
  background-color: white;
`;

const ModalLocation = styled(Modal)`
  top: 250px;
  left: 265px;
  padding: 20px;
`;
