import React, { useState, useRef, useEffect } from 'react';
import LoginModal from '../Modal/LoginModal';
import SignModal from '../Modal/SignModal';
import BeforeSearch from './BeforeSearch';
import OnClickSearch from './OnClickSearch';
import SignModal from '../Modal/SignModal';

const Nav = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [location, setLocation] = useState('지도표시지역');
  const [guest, setGuest] = useState(0);
  const [toggleNavbar, setToggleNavbar] = useState(true);
  const [profileModal, setProfileModal] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [signupIsOpen, setSignupIsOpen] = useState(true);
  const [isToken, setIsToken] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    if (localStorage.getItem('Token')) {
      setIsToken(true);
    } else {
      setIsToken(false);
    }
  }, [isToken]);

  const reroad = () => {
    window.location.replace('/');
  };

  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const increseNum = () => {
    setGuest(prev => prev + 1);
  };

  const decreseNum = () => {
    setGuest(prev => prev - 1);
  };

  const toggleNav = () => {
    setToggleNavbar(false);
  };

  const clickUserInfo = () => {
    setProfileModal(prev => !prev);
  };

  const switchModal = () => {
    setProfileModal(prev => !prev);
    setModalIsOpen(prev => !prev);
  };

  // if (localStorage.getItem('key')) {
  //   setModalIsOpen(false);
  //   setSignupIsOpen(true);
  // } else {
  //   setModalIsOpen(true);
  //   setSignupIsOpen(false);
  // }

  return (
    <>
      <div>
        <BeforeSearch
          toggleNav={toggleNav}
          toggleNavbar={toggleNavbar}
          startDate={startDate}
          endDate={endDate}
          location={location}
          guest={guest}
          setLocation={setLocation}
          onChange={onChange}
          increseNum={increseNum}
          decreseNum={decreseNum}
          profileModal={profileModal}
          setProfileModal={setProfileModal}
          clickUserInfo={clickUserInfo}
          isToken={isToken}
          setIsToken={setIsToken}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          switchModal={switchModal}
          reroad={reroad}
        />
        <OnClickSearch
          toggleNav={toggleNav}
          toggleNavbar={toggleNavbar}
          startDate={startDate}
          endDate={endDate}
          location={location}
          guest={guest}
          setLocation={setLocation}
          onChange={onChange}
          increseNum={increseNum}
          decreseNum={decreseNum}
          modalRef={modalRef}
          setToggleNavbar={setToggleNavbar}
          profileModal={profileModal}
          setProfileModal={setProfileModal}
          clickUserInfo={clickUserInfo}
          isToken={isToken}
          setIsToken={setIsToken}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          switchModal={switchModal}
          reroad={reroad}
        />
      </div>
      {localStorage.getItem('key') ? (
        <SignModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      ) : (
        <LoginModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      )}
    </>
  );
};

export default Nav;
