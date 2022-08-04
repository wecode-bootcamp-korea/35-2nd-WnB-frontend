import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const ModalWindow = props => {
  let { modalIsOpen, setModalIsOpen, contents, modalStyle } = props;

  return (
    <Modal
      isOpen={modalIsOpen}
      style={modalStyle}
      ariaHideApp={false}
      onRequestClose={() => setModalIsOpen(prev => !prev)}
    >
      <ModalWrap>
        <ModalHeader>
          <i
            className="fa-solid fa-arrow-left-long"
            onClick={() => setModalIsOpen(prev => !prev)}
          />
        </ModalHeader>
        <ImgWrap>{contents}</ImgWrap>
      </ModalWrap>
    </Modal>
  );
};

const ModalWrap = styled.div`
  margin: 0 auto;
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

  img {
    width: 100%;
    float: left;
    margin-top: 10px;
  }

  img:nth-child(2) {
    width: 49.5%;
    margin-right: 1%;
    float: left;
  }

  img:nth-child(3) {
    width: 49.5%;
    float: left;
  }

  img:nth-child(5) {
    width: 49.5%;
    margin-right: 1%;
    float: left;
    height: 300px;
  }

  img:nth-child(6) {
    width: 49.5%;
    float: left;
    height: 300px;
  }
`;

export default ModalWindow;
