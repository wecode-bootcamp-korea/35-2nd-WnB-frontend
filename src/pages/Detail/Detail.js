import React, { useState, useEffect } from 'react';
import { API } from '../../components/Config/Config';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import DetailTop from './components/DetailTop';
import DetailPhoto from './components/DetailPhoto';
import DetailMainLeft from './components/DetailMainLeft';
import DetailMainRight from './components/DetailMainRight';
import DetailMap from './components/DetailMap';
import DetailNotice from './components/DetailNotice';
import ModalWindow from '../../components/Modal/Modal';
import _ from 'lodash';

const Detail = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [item, setItem] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [detailNav, setdetailNav] = useState(false);
  const [detailNavBtn, setDetailNavBtn] = useState(false);
  let [days, setDays] = useState(1);
  let [totalPee, setTotalPee] = useState(1);
  let [guests, setGuests] = useState(1);
  const params = useParams();
  const navigate = useNavigate();

  const newFormatDate = date => {
    let year = date.getFullYear();
    let month = ('0' + (1 + date.getMonth())).slice(-2);
    let day = ('0' + date.getDate()).slice(-2);

    return year + '-' + month + '-' + day;
  };

  const goToBooking = () => {
    endDate
      ? fetch(`${API.booking}`, {
          method: 'POST',
          headers: {
            Authorization:
              'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6OH0.5aGARoue-I92MCF8KW2n07p8tRMdxw_6zIgTYnXEn_Q',
          },
          body: JSON.stringify({
            room: id,
            price: totalPee,
            check_in: newFormatDate(startDate),
            check_out: newFormatDate(endDate),
            people: guests,
          }),
        })
          .then(response => response.json())
          .then(result => {
            result.MESSAGE === 'SUCCESS' && alert('예약완료');
            navigate('/resList');
          })
      : alert('예약일을 선택해주세요');
  };

  window.addEventListener(
    'scroll',
    _.throttle(() => {
      window.scrollY > 150 ? setdetailNav(true) : setdetailNav(false);
      window.scrollY > 1600 ? setDetailNavBtn(true) : setDetailNavBtn(false);
    })
  );

  const onChange = dates => {
    const [start, end] = dates;

    setStartDate(start);
    setEndDate(end);
  };

  useEffect(() => {
    fetch(`${API.detail}/${params.id}`)
      .then(response => response.json())
      .then(data => setItem(data.result));
  }, []);

  console.log(params);

  const {
    id,
    name,
    address,
    detail_address,
    price,
    description,
    latitude,
    longitude,
    maximum_occupancy,
    bedroom,
    bathroom,
    bed,
    host,
    category,
    room_type,
    detail_images,
    facilities,
    reservations,
  } = item;

  return (
    room_type && (
      <>
        <Inner>
          <DetailTop
            room_name={name}
            category={category.name}
            address={address}
            detail_address={detail_address}
          />
          <DetailPhoto setModalIsOpen={setModalIsOpen} images={detail_images} />
          <DetailMain>
            <DetailMainLeft
              host={host}
              category={category.name}
              maximum_occupancy={maximum_occupancy}
              bedroom={bedroom}
              bathroom={bathroom}
              bed={bed}
              description={description}
              room_type={room_type.name}
              facilities={facilities}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              reservations={reservations}
            />
            <DetailMainRight
              days={days}
              setDays={setDays}
              setTotalPee={setTotalPee}
              setGuests={setGuests}
              totalPee={totalPee}
              guests={guests}
              price={price}
              maximum_occupancy={maximum_occupancy}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              id={id}
              detailNavBtn={detailNavBtn}
              goToBooking={goToBooking}
              newFormatDate={newFormatDate}
              API={API}
              reservations={reservations}
            />
          </DetailMain>

          <DetailMap
            lat={latitude}
            lng={longitude}
            address={address}
            detail_address={detail_address}
          />
          <DetailNotice />
        </Inner>
        <DetailNav detailNav={detailNav}>
          <DetailNavInner>
            <NavMenu>
              {NAVMENUDATA &&
                NAVMENUDATA.map((list, idx) => {
                  return <li key={idx}>{list}</li>;
                })}
            </NavMenu>
            <NavBtn detailNavBtn={detailNavBtn} onClick={goToBooking}>
              예약하기
            </NavBtn>
          </DetailNavInner>
        </DetailNav>
        <ModalWindow
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          modalStyle={modalStyle}
          detail_images={detail_images}
        />
      </>
    )
  );
};

const Inner = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 100px auto 0;
`;

const DetailMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
`;

const modalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.45)',
    zIndex: 10,
  },

  content: {
    display: 'flex',
    justifyContent: 'center',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    outline: 'none',
    zIndex: 10,
  },
};

const DetailNav = styled.div`
  display: ${props => (props.detailNav ? 'block' : 'none')};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #eee;
  z-index: ${props => (props.detailNav ? '999' : '0')};
`;

const DetailNavInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  max-width: 1120px;
  margin: 0 auto;
  padding: 20px 0;
  background-color: white;
`;

const NavBtn = styled.button`
  display: ${props => (props.detailNavBtn ? 'block' : 'none')};
  width: 150px;
  background-color: #7a0bc0;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 17px;
  font-weight: 800;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
`;
const NavMenu = styled.ul`
  li:not(:last-child)::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 12px;
    margin: 0 8px;
    background-color: #e4e8eb;
  }

  li {
    float: left;
  }
`;

export default Detail;
const NAVMENUDATA = ['사진', '편의시설', '위치'];
