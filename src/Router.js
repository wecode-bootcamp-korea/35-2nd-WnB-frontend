import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
// import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import Footer from './components/Footer/Footer';
import List from './pages/List/List';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import KakaoLogin from './pages/Login/components/KakaoLogin';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/detail" element={<Detail />} />
        <Route path="/list" element={<List />} />
        <Route path="/oauth/kakao/callback" element={<KakaoLogin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
