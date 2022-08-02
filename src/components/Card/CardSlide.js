import styled from 'styled-components';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CardSlide = ({ images }) => {
  return (
    <Carousel
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      navigation
      pagination={{
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3,
      }}
    >
      {images.map((data, idx) => {
        return (
          <SwiperSlide key={idx}>
            <img src={data} alt="slide" />
          </SwiperSlide>
        );
      })}
    </Carousel>
  );
};

const Carousel = styled(Swiper)`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default CardSlide;
