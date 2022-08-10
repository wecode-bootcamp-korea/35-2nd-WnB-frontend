import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CardSlide from '../../components/Card/CardSlide';

const ResDetail = () => {
  const [roomData, setRoomData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://10.58.0.31:8000/reservations/12123sad`)
      .then(res => res.json())
      .then(data => setRoomData(data.RESULT));
  }, []);

  const CancelHandler = () => {
    fetch(`http://10.58.0.31:8000/reservations/12123sad`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        reservation_number,
      }),
    }).then(() => {
      let cancelConfirm = window.confirm('예약을 취소하시겠습니까?');
      if (cancelConfirm) {
        alert('예약이 취소되었습니다.');
        navigate('/resList');
      } else {
        alert('다시 시도해주세요!');
      }
    });
  };

  let {
    reservation_number,
    images,
    address,
    check_in,
    check_out,
    people,
    description,
    price,
  } = roomData;
  return (
    reservation_number && (
      <div>
        <DetailContainer key={reservation_number}>
          <ImgWrap>
            <CardSlide images={images} />
          </ImgWrap>
          <DetailWrap>
            <CheckInOutWrap>
              <CheckInOut>
                <ResDetailSubTit>체크인</ResDetailSubTit>
                <p>{check_in}</p>
              </CheckInOut>
              <CheckInOut>
                <ResDetailSubTit>체크아웃</ResDetailSubTit>
                <p>{check_out}</p>
              </CheckInOut>
            </CheckInOutWrap>
            <div>
              {CHECKINOUT_INFO.map(({ id, link, icon, text }) => {
                return (
                  <ResDetailLink key={id} to={link}>
                    <span>
                      <i className={icon} /> {text}
                    </span>
                    <span>
                      <i className="fa-solid fa-angle-right" />
                    </span>
                  </ResDetailLink>
                );
              })}
            </div>
          </DetailWrap>
          <DetailWrap>
            <ResDetailTit>예약 세부정보</ResDetailTit>
            <ResDetailItem>
              <ResDetailSubTit>게스트</ResDetailSubTit>
              <p>게스트 {people}명</p>
            </ResDetailItem>
            <ResDetailItem>
              <ResDetailSubTit>예약번호</ResDetailSubTit>
              <p>{reservation_number}</p>
            </ResDetailItem>
            <div>
              {RESERVATION_INFO.map(({ id, link, icon, text }) => {
                return (
                  <ResDetailLink key={id} to={link}>
                    <span>
                      <i className={icon} /> {text}
                    </span>
                    <span>
                      <i className="fa-solid fa-angle-right" />
                    </span>
                  </ResDetailLink>
                );
              })}
            </div>
          </DetailWrap>
          <DetailWrap>
            <ResDetailTit>찾아가는 방법</ResDetailTit>
            <ResDetailItem>
              <ResDetailSubTit>주소</ResDetailSubTit>
              <p>{address}</p>
            </ResDetailItem>
            <div>
              {ADDRESS_INFO.map(({ id, link, icon, text }) => {
                return (
                  <ResDetailLink key={id} to={link}>
                    <span>
                      <i className={icon} /> {text}
                    </span>
                    <span>
                      <i className="fa-solid fa-angle-right" />
                    </span>
                  </ResDetailLink>
                );
              })}
            </div>
          </DetailWrap>
          <DetailWrap>
            <ResDetailTit>숙소</ResDetailTit>
            <ResDetailItem>
              <ResDetailSubTit>숙소 설명</ResDetailSubTit>
              <p>{description}</p>
            </ResDetailItem>
            <ResDetailLink to="/">
              <span>
                <i className="fa-solid fa-house-chimney-window" /> 숙소 보기
              </span>
              <span>
                <i className="fa-solid fa-angle-right" />
              </span>
            </ResDetailLink>
            <ResDetailLink to="/" onClick={CancelHandler}>
              <span>
                <i className="fa-solid fa-house-chimney-window" /> 예약 취소하기
              </span>
              <span>
                <i className="fa-solid fa-angle-right" />
              </span>
            </ResDetailLink>
          </DetailWrap>
          <DetailWrap>
            <ResDetailTit>결제 정보</ResDetailTit>
            <ResDetailItem>
              <ResDetailSubTit>총 비용</ResDetailSubTit>
              <p>₩{price} KRW</p>
            </ResDetailItem>
            <div>
              {PAYMENT_INFO.map(({ id, link, icon, text }) => {
                return (
                  <ResDetailLink key={id} to={link}>
                    <span>
                      <i className={icon} /> {text}
                    </span>
                    <span>
                      <i className="fa-solid fa-angle-right" />
                    </span>
                  </ResDetailLink>
                );
              })}
            </div>
          </DetailWrap>
          <DetailWrap>
            <ResDetailTit>에어비앤비 지원</ResDetailTit>
            <div>
              {HELP_INFO.map(({ id, link, icon, text }) => {
                return (
                  <ResDetailLink as="a" key={id} to={link}>
                    <span>
                      <i className={icon} /> {text}
                    </span>
                    <span>
                      <i className="fa-solid fa-angle-right" />
                    </span>
                  </ResDetailLink>
                );
              })}
            </div>
          </DetailWrap>
        </DetailContainer>
      </div>
    )
  );
};

export default ResDetail;

const CHECKINOUT_INFO = [
  {
    id: 1,
    link: '/',
    icon: 'fa-solid fa-location-dot',
    text: '찾아가는 방법 보기',
  },
  { id: 2, link: '/', icon: 'fa-solid fa-phone', text: '호스트에게 전화하기' },
  {
    id: 3,
    link: '/',
    icon: 'fa-solid fa-message',
    text: '호스트에게 메시지 보내기',
  },
  {
    id: 4,
    link: '/',
    icon: 'fa-solid fa-house-chimney-window',
    text: '숙소 보기',
  },
];

const RESERVATION_INFO = [
  {
    id: 1,
    link: '/',
    icon: 'fa-globe',
    text: '여행 일정표 PDF로 받기(비자신청용)',
  },
  { id: 2, link: '/', icon: 'fa-solid fa-print', text: '세부정보 인쇄하기' },
  { id: 3, link: '/', icon: 'fa-solid fa-receipt', text: '영수증 받기' },
];

const ADDRESS_INFO = [
  { id: 1, link: '/', icon: 'fa-solid fa-copy', text: '주소 복사하기' },
  {
    id: 2,
    link: '/',
    icon: 'fa-solid fa-location-dot',
    text: '찾아가는 방법 보기',
  },
];

const PAYMENT_INFO = [
  {
    id: 1,
    link: '/',
    icon: 'fa-solid fa-folder-plus',
    text: '출장 경비 청구를 위한 세부 정보 입력하기',
  },
  { id: 2, link: '/', icon: 'fa-solid fa-receipt', text: '영수증 받기' },
];

const HELP_INFO = [
  {
    id: 1,
    link: 'https://www.airbnb.co.kr/help',
    icon: 'fa-solid fa-circle-question',
    text: '도움말 센터',
  },
  {
    id: 2,
    link: 'https://www.airbnb.co.kr/help',
    icon: 'fa-solid fa-house-circle-exclamation',
    text: '해결 센터',
  },
];

const DetailContainer = styled.div`
  margin: 0 auto;
  width: 620px;
  background-color: #ebebeb;
  padding-top: 80px;
  border-left: 8px solid #ebebeb;
  border-right: 8px solid #ebebeb;
`;

const DetailWrap = styled.div`
  background-color: #fff;
  margin-bottom: 10px;
  padding: 16px 24px;
  &:last-child {
    margin-bottom: 0;
    border-bottom: 8px solid #ebebeb;
  }
`;

const ImgWrap = styled.div`
  .swiper {
    height: 40vw;
    border-radius: 12px;

    &:hover .swiper-button-prev,
    &:hover .swiper-button-next {
      opacity: 1;
    }

    .swiper-slide {
      height: auto;
    }

    .swiper-pagination-bullet {
      width: 6px;
      height: 6px;
      background: #fff;
      opacity: 0.4;

      &.swiper-pagination-bullet-active {
        opacity: 1;
      }
    }

    .swiper-button-prev {
      background-image: url(/images/prev.png);
    }

    .swiper-button-next {
      background-image: url(/images/next.png);
    }

    .swiper-button-prev,
    .swiper-button-next {
      background-color: #fff;
      background-position: center;
      background-repeat: no-repeat;
      background-size: 18px;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      opacity: 0;
      transition: all 0.2s;
      box-shadow: 1px 1px 5px #717171;
      border: 1px solid #eee;
      top: auto;
      bottom: 5%;

      img {
        width: 16px;
        height: 16px;
        object-fit: unset;
      }

      &:after {
        content: none;
      }
    }

    .swiper-button-disabled {
      display: none;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CheckInOutWrap = styled.div`
  display: table;
  width: 100%;
  padding: 24px 0;
  border-bottom: 1px solid rgb(221, 221, 221);
`;

const CheckInOut = styled.div`
  display: table-cell;
  &:first-of-type {
    padding-right: 24px;
    border-right: 1px solid #ddd;
  }
  &:last-of-type {
    padding-left: 24px;
  }
`;

const ResDetailSubTit = styled.h3`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 600;
`;

const ResDetailLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid rgb(221, 221, 221);
  color: #222;
  text-decoration: none;

  &:last-child {
    border-bottom: 0;
  }

  i {
    padding-right: 16px;
  }
`;

const ResDetailTit = styled.h2`
  padding-top: 8px;
  margin-bottom: 8px;
  font-size: 22px;
  font-weight: 600;
`;

const ResDetailItem = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid rgb(221, 221, 221);

  p {
    padding: 8px 0;
    line-height: 20px;
  }
`;
