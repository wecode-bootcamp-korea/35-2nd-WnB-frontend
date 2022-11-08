import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Login from '../../pages/Login/Login';

import { openLoginModal } from '../../reducers/nav';

const LoginModal = () => {
  const dispatch = useDispatch();
  const { isOpenLoginModal } = useSelector(state => state.nav);

  const modalStyle = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      zIndex: 999,
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '560px',
      border: '1px solid #ddd',
      background: '#fff',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '10px',
      outline: 'none',
      padding: '0',
    },
  };

  return (
    <Modal
      isOpen={isOpenLoginModal}
      style={modalStyle}
      ariaHideApp={false}
      onRequestClose={() => dispatch(openLoginModal())}
    >
      <Close onClick={() => dispatch(openLoginModal())}>닫기</Close>
      <ModalWrap>
        <Login />
      </ModalWrap>
    </Modal>
  );
};

const Close = styled.button`
  position: absolute;
  top: 16px;
  left: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  border: none;
  font-size: 0;
  text-indent: -9999px;
  cursor: pointer;

  &::before,
  ::after {
    content: '';
    position: absolute;
    top: 8px;
    left: 14px;
    width: 2px;
    height: 14px;
    background-color: #000;
  }

  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }

  &:hover {
    background-color: #f5f5f5;
  }
`;

const ModalWrap = styled.div`
  width: 100%;
`;
export default LoginModal;
