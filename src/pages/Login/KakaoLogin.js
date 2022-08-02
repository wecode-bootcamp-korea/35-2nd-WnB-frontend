import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../components/Config/Config';

const KakaoLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split('=')[1];

  const goSign = () => {
    fetch(`${BASE_URL}/users/kakao/oauth`, {
      method: 'GET',
      headers: { Authorization: localStorage.getItem('key') },
    })
      .then(res => res.json())
      .then(
        data => (
          localStorage.setItem('Token', data.token),
          alert('환영합니다'),
          // navigate('/')
          window.location.replace('/')
        )
      );
  };

  //TOKEN 저장
  const getKakaoToKen = () => {
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=authorization_code&client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&code=${KAKAO_CODE}`,
    })
      .then(res => res.json())
      .then(data => {
        if (data.access_token) {
          localStorage.setItem('key', data.access_token);
          goSign();
        } else {
          navigate('/');
        }
      });
  };
  useEffect(() => {
    if (!location.search) return <div>로딩중</div>;
    getKakaoToKen();
  }, []);

  return <div>KakaoLogin</div>;
};

export default KakaoLogin;
