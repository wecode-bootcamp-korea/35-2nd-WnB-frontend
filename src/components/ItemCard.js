import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CardSlide from './CardSlide';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ItemCard = () => {
  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    fetch('/data/RoomData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setRoomData(data));
  }, []);

  return (
    <Card>
      {roomData.map(
        ({
          host_id,
          name,
          address,
          description,
          bed,
          price,
          images,
          review,
        }) => {
          const starRank = (Math.random() * 5).toFixed(2);
          const reviewCount = review.length ? starRank : 'NEW';

          return (
            <CardWrap key={host_id}>
              <CardImage>
                <CardSlide images={images} />
              </CardImage>
              <div className="CardText">
                <LinkToDetail to="/login">
                  <CardTitle>
                    <TxtTitle>{name}</TxtTitle>
                    <CardGrade>
                      <i className="fa-solid fa-star" />
                      &nbsp;{reviewCount}
                    </CardGrade>
                  </CardTitle>
                  <Descrition>{address}</Descrition>
                  <Descrition>{description}</Descrition>
                  <Descrition>침대 {bed}개</Descrition>
                  <CardPrice>
                    <DayPrice>￦{price.toLocaleString()} /박</DayPrice>
                    <TotalPrice>총액 ￦120,150</TotalPrice>
                  </CardPrice>
                </LinkToDetail>
              </div>
            </CardWrap>
          );
        }
      )}
    </Card>
  );
};

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px 40px;
  margin: 16px auto 40px;
  padding: 0 80px;
  @media (min-width: 550px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 950px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (min-width: 1128px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const LinkToDetail = styled(Link)`
  text-decoration: none;
  line-height: 1.4;
`;

const CardWrap = styled.div`
  display: inline-block;
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

const TotalPrice = styled.span`
  position: relative;
  color: #717171;
  padding-left: 10px;

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 10px;
    left: 4px;
    width: 2px;
    height: 2px;
    background-color: #717171;
    border-radius: 50%;
  }
`;

export default ItemCard;
