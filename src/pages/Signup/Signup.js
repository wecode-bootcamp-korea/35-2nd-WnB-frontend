import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Input from './Input';

const Signup = () => {
  const modal = useRef();
  const [isModalOpen, setModalOpen] = useState(false);

  const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = e => {
        if (!ref.current || ref.current.contains(e.target)) {
          return;
        }
        handler(e);
      };
      document.addEventListener('mousedown', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
      };
    }, [ref, handler]);
  };

  useOnClickOutside(modal, () => setModalOpen(false));

  return (
    <>
      <button onClick={() => setModalOpen(true)}>test</button>
      {isModalOpen && (
        <LoginWapper>
          <SignupModal ref={modal}>
            <Close onClick={() => setModalOpen(false)}>닫기</Close>
            <SignTitle>회원가입</SignTitle>
            <Signinfo>
              <Welcome>사용자 정보를 입력해주세요.</Welcome>
              <Input />
            </Signinfo>
          </SignupModal>
        </LoginWapper>
      )}
    </>
  );
};

const LoginWapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
`;

const SignupModal = styled.article`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 560px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fff;
`;

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

const SignTitle = styled.header`
  height: 60px;
  line-height: 60px;
  color: #242424;
  font-weight: 700;
  text-align: center;
  border-bottom: 1px solid #ddd;
`;

const Signinfo = styled.section`
  padding: 50px;
`;

const Welcome = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 30px;
`;

export default Signup;
