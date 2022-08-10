import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import CardSlide from './CardSlide';

const ItemCard = ({ roomData }) => {
  const location = useLocation();
  let isCheckPath = location.pathname === '/';
  const { images, name, address, description, price, bed } = roomData;

  const starRank = (Math.random() * 3 + 2).toFixed(2);
  const reviewCount = roomData.review.length ? starRank : 'NEW';
  return (
    <div path={isCheckPath}>
      <CardImage>
        <CardSlide images={images} />
      </CardImage>
      <div className="CardText">
        <LinkToDetail to="/detail">
          <CardTitle>
            <TxtTitle>{name}</TxtTitle>
            <CardGrade>
              <i className="fa-solid fa-star" />
              &nbsp;{reviewCount}
            </CardGrade>
          </CardTitle>
          <Address>{address}</Address>
          <Description>{description}</Description>
          <BedCount>침대 {bed}개</BedCount>
          <CardPrice>
            <DayPrice>￦{price.toLocaleString()} /박</DayPrice>
            <TotalPrice>총액 ￦120,150</TotalPrice>
          </CardPrice>
        </LinkToDetail>
      </div>
    </div>
  );
};

export default ItemCard;

const LinkToDetail = styled(Link)`
  text-decoration: none;
  line-height: 1.4;
`;

const CardImage = styled.div`
  margin-bottom: 12px;

  .swiper {
    height: 22vw;
    border-radius: 12px;
    @media (max-width: 950px) {
      height: 40vw;
    }
    @media (max-width: 550px) {
      height: 60vw;
    }

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

const Address = styled.p`
  padding-right: 20%;
  color: #717171;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Description = styled.p`
  display: ${props => (props.path ? 'none' : 'block')};
  padding-right: 20%;
  color: #717171;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const BedCount = styled.p`
  display: ${props => (props.path ? 'block' : 'none')};
  color: #717171;
`;

const CardPrice = styled.p`
  margin-top: 6px;
`;

const DayPrice = styled.span`
  color: #222;
  font-weight: 600;
`;

const TotalPrice = styled.span`
  display: ${props => (props.path ? 'inline-block' : 'none')};
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
