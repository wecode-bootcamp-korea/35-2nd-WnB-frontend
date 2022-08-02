import React, { useState, useRef } from 'react';
import BeforeSearch from './BeforeSearch';
import OnClickSearch from './OnClickSearch';

const Nav = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [location, setLocation] = useState('지도표시지역');
  const [guest, setGuest] = useState(0);
  const [toggleNavbar, setToggleNavbar] = useState(true);
  const [profileModal, setProfileModal] = useState(false);
  const modalRef = useRef();

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

  return (
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
      />
    </div>
  );
};

export default Nav;
