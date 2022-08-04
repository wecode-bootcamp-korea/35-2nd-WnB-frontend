import React from 'react';
import styled from 'styled-components';

const Login = props => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;

  return (
    <LoginWapper>
      <LoginTitle>로그인 또는 회원가입</LoginTitle>
      <Logininfo>
        <Welcome>WnB에 오신 것을 환영합니다.</Welcome>
        <LoginText>숙박의 모든 것, WnB입니다.</LoginText>
        <KakaoBtn>
          <KaKaoLink href={KAKAO_AUTH_URL}>카카오톡으로 로그인하기</KaKaoLink>
        </KakaoBtn>
      </Logininfo>
    </LoginWapper>
  );
};

const LoginWapper = styled.div`
  width: 100%;
`;

const LoginTitle = styled.header`
  height: 60px;
  line-height: 60px;
  color: #242424;
  font-weight: 700;
  text-align: center;
  border-bottom: 1px solid #ddd;
`;

const Logininfo = styled.section`
  padding: 50px;
`;

const Welcome = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 30px;
`;

const LoginText = styled.p`
  margin: 30px 0;
  font-size: 16px;
  color: #686868;
`;

const KakaoBtn = styled.button`
  width: 100%;
  margin-top: 20px;
  color: #fff;
  background-color: #f9e000;
  border-radius: 8px;
  border: none;
  font-size: 14px;
  cursor: pointer;
`;

const KaKaoLink = styled.a`
  display: block;
  padding: 14px;
  text-decoration: none;
  color: #fff;
`;

export default Login;
