import React from 'react';
import Modal from 'react-modal';
import ModalWrap from '../../pages/Detail/components/ModalWrap';
import { useLocation } from 'react-router-dom';

const ModalWindow = props => {
  let { modalIsOpen, setModalIsOpen, detail_images, modalStyle } = props;
  console.log(detail_images);
  return (
    <Modal
      isOpen={modalIsOpen}
      style={modalStyle}
      ariaHideApp={false}
      onRequestClose={() => setModalIsOpen(prev => !prev)}
    >
      <ModalWrap
        setModalIsOpen={setModalIsOpen}
        detail_images={detail_images}
      />
    </Modal>
  );
};
export default ModalWindow;
