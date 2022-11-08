import React from 'react';
import styled from 'styled-components';
import UserInfo from './UserInfo';

const Signup = () => {
  return (
    <SignWapper>
      <SignTitle>회원가입</SignTitle>
      <Signinfo>
        <Welcome>사용자 정보를 입력해주세요..</Welcome>
        <UserInfo />
      </Signinfo>
    </SignWapper>
  );
};

const SignWapper = styled.div`
  width: 100%;
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
