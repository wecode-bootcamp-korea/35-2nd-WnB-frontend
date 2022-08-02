import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CardSlide from './CardSlide';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ItemCard = ({ roomData }) => {
  const [reData, setReData] = useState([]);
  const starRank = (Math.random() * 3 + 2).toFixed(2);
  const {
    room_id,
    room_image,
    room_name,
    room_address,
    description,
    bed,
    room_price,
  } = roomData;
  const location = useLocation();
  const navigate = useNavigate();

  let isCheckPath = location.pathname === '/';

  useEffect(() => {
    setReData(roomData);
  }, []);

  const moveToDetail = room_id => {
    navigate(`/detail/${room_id}`);
  };

  // console.log('roomData', roomData);

  return (
    <Card path={isCheckPath}>
      <CardWrap key={room_id}>
        <CardImage>
          <CardSlide images={room_image} />
        </CardImage>
        <div className="CardText">
          <LinkToDetail onClick={() => moveToDetail(room_id)}>
            <CardTitle>
              <TxtTitle>{room_name}</TxtTitle>
              <CardGrade>
                <i className="fa-solid fa-star" />
                &nbsp;{starRank}
              </CardGrade>
            </CardTitle>
            <Address>{room_address}</Address>
            <Descrition>{description}</Descrition>
            <BedCount>침대 {bed}개</BedCount>
            <CardPrice>
              <DayPrice>￦{Number(room_price).toLocaleString()} /박</DayPrice>
            </CardPrice>
          </LinkToDetail>
        </div>
      </CardWrap>
    </Card>
  );
};

const Card = styled.div`
  display: inline-block;
  width: 100%;
  /* display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr)); */
  /* gap: 24px 40px;
  margin: 16px auto 40px;
  padding: 0 80px; */
  /* @media (min-width: 550px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 950px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (min-width: 1128px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  } */
`;

const LinkToDetail = styled.div`
  text-decoration: none;
  line-height: 1.4;
  cursor: pointer;
`;

const CardWrap = styled.div`
  display: inline-block;
  width: 100%;
`;

const CardImage = styled.div`
  margin-bottom: 12px;

  .swiper {
    height: 22vw;
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
      background-color: #fff;
      background-image: url(/images/prev.png);
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

      img {
        width: 16px;
        height: 16px;
        object-fit: unset;
      }

      &:after {
        content: none;
      }
    }

    .swiper-button-next {
      background-color: #fff;
      background-image: url(/images/next.png);
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

const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #222;
`;

const TxtTitle = styled.span`
  padding-right: 5%;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const CardGrade = styled.span`
  width: 80px;
  text-align: right;
  i {
    color: #222;
    font-size: 13px;
  }
`;

const Descrition = styled.p`
  display: ${props => (props.path ? 'none' : 'block')};
  padding-right: 20%;
  color: #717171;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const CardPrice = styled.p`
  margin-top: 6px;
`;

const DayPrice = styled.span`
  color: #222;
  font-weight: 600;
`;

const BedCount = styled.p`
  display: ${props => (props.path ? 'none' : 'block')};
  color: #717171;
`;

const Address = styled.p`
  padding-right: 20%;
  color: #717171;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export default ItemCard;
