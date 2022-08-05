import React from 'react';
import Modal from 'react-modal';
import ModalWrap from '../../pages/Detail/components/ModalWrap';
import { useLocation } from 'react-router-dom';

const ModalWindow = props => {
  let { modalIsOpen, setModalIsOpen, contents, modalStyle } = props;

  const location = useLocation();

  let isCheckPath = location.pathname === '/detail';

  return (
    <Modal
      isOpen={modalIsOpen}
      style={modalStyle}
      ariaHideApp={false}
      onRequestClose={() => setModalIsOpen(prev => !prev)}
    >
      {isCheckPath && (
        <ModalWrap setModalIsOpen={setModalIsOpen} contents={contents} />
      )}
    </Modal>
  );
};

export default ModalWindow;
