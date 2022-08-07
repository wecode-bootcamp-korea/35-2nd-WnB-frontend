import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import Footer from './components/Footer/Footer';
import List from './pages/List/List';
import ResList from './pages/ResList/ResList';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/list" element={<List />} />
        <Route path="/resList" element={<ResList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
