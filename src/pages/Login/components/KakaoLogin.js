import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CLIENT_ID, REDIRECT_URI } from './Oauth';

const KakaoLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split('=')[1];

  const go = () => {
    fetch(`http://10.58.5.43:8000/users/kakao/oauth`, {
      method: 'GET',
      headers: { Authorization: localStorage.getItem('key') },
    })
      .then(res => res.json())
      .then(data => localStorage.setItem('Token', data.token)); // 현재 백엔드와 테스트 통신 확인한 콘솔 - 백에서 정보 받으면 지우기
    // .then(data => {
    //   if (백엔드에서 전달받은 메세지 넣기) {
    //      조건은 삼항연산자 넣어서 조건 걸기?
    //     navigate('/');
    //   }
    // });
  };

  //TOKEN 저장
  const getKakaoToKen = () => {
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=authorization_code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
    })
      .then(res => res.json())
      .then(data => {
        if (data.access_token) {
          localStorage.setItem('key', data.access_token);
          go();
        } else {
          navigate('/');
        }
      });
  };
  useEffect(() => {
    if (!location.search) return;
    getKakaoToKen();
  }, []);

  return <div>KakaoLogin</div>;
};

export default KakaoLogin;
