import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CLIENT_ID, REDIRECT_URI } from './components/Oauth';

const Login = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

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
          <LoginModal ref={modal}>
            <LoginTitle>로그인 또는 회원가입</LoginTitle>
            <Logininfo>
              <Welcome>WnB에 오신 것을 환영합니다.</Welcome>
              <LoginText>숙박의 모든 것, 위앤비에ㅇ라ㅏㅏㅏㅏㅏ</LoginText>
              <KakaoBtn onClick={handleLogin}>카카오톡으로 로그인하기</KakaoBtn>
            </Logininfo>
          </LoginModal>
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

const LoginModal = styled.article`
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

const LoginTitle = styled.header`
  height: 50px;
  line-height: 50px;
  color: #242424;
  font-weight: 700;
  text-align: center;
  border-bottom: 1px solid #ddd;
`;

const Logininfo = styled.section`
  padding: 50px;
`;

const Welcome = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const LoginText = styled.p`
  margin: 30px 0;
  font-size: 16px;
  color: #686868;
`;

const KakaoBtn = styled.button`
  width: 100%;
  padding: 14px;
  color: #fff;
  background-color: #f9e000;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  cursor: pointer;
`;

export default Login;
