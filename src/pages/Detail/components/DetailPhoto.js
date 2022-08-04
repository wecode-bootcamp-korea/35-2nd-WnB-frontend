import React from 'react';
import styled from 'styled-components';

const DetailPhoto = ({ setModalIsOpen, images }) => {
  return (
    <PhotoContainer>
      <PhotoLeft>
        <img src={images[0]} alt="샘플" />
      </PhotoLeft>
      <PhotoRight>
        <RightTop>
          <img src={images[1]} alt="샘플" />
        </RightTop>
        <RightBottom>
          <img src={images[2]} alt="샘플" />
        </RightBottom>
      </PhotoRight>
      <ModalBtn
        onClick={() => {
          setModalIsOpen(prev => !prev);
        }}
      >
        <i className="fa-solid fa-camera" />
        사진 모두보기
      </ModalBtn>
    </PhotoContainer>
  );
};

const PhotoContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 40px;
  overflow: hidden;
`;

const PhotoLeft = styled.div`
  width: 70%;
  height: 550px;
  margin-right: 10px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const PhotoRight = styled.div`
  width: calc(100% - 70%);
  height: 550px;
`;

const RightTop = styled.div`
  width: 100%;
  height: 50%;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const RightBottom = styled.div`
  width: 100%;
  height: 50%;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ModalBtn = styled.div`
  position: absolute;
  right: 30px;
  bottom: 30px;
  padding: 7px 15px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 7px;
  cursor: pointer;

  i {
    margin-right: 10px;
  }
`;

export default DetailPhoto;
