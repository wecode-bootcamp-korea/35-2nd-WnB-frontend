import React from 'react';
import styled from 'styled-components';

const ModalWrap = ({ setModalIsOpen, detail_images }) => {
  console.log('ㄴ', detail_images);
  return (
    <ModalWraps>
      <ModalHeader>
        <i
          className="fa-solid fa-arrow-left-long"
          onClick={() => setModalIsOpen(prev => !prev)}
        />
      </ModalHeader>
      <ImgWrap>
        <img src={detail_images[0]} alt="#" />
        <img src={detail_images[1]} alt="#" />
        <img src={detail_images[2]} alt="#" />
      </ImgWrap>
    </ModalWraps>
  );
};

const ModalWraps = styled.div`
  margin: 80px auto;
  width: 100%;
`;

const ModalHeader = styled.div`
  width: 100%;
  margin: 30px 0px;

  i {
    font-size: 20px;
    cursor: pointer;
  }
`;

const ImgWrap = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  img {
    width: 100%;
    margin-top: 10px;
  }

  img:nth-child(2) {
    width: 49.5%;
  }

  img:nth-child(3) {
    width: 49.5%;
  }

  img:nth-child(5) {
    width: 49.5%;
    margin-right: 1%;
    height: 300px;
  }

  img:nth-child(6) {
    width: 49.5%;
    height: 300px;
  }
`;

export default ModalWrap;
