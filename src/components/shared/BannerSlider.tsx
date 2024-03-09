import { BannerSlider } from "../../interfaces";
import React from "react";
import Banner from "./SwiperCard";
import Swiper, { SwiperSlide } from "./Swiper";
import SwiperCore, { Navigation, Pagination } from "swiper";

interface props {
  data: BannerSlider[];
  onEachCard?: (card: BannerSlider) => React.ReactNode;
}

const CardSwiper: React.FC<props> = (props) => {
  const { data, onEachCard = (data) => <Banner data={data} /> } = props;

  return (
    <Swiper>
      {data.map((item, index: number) => (
        <SwiperSlide key={index}>{onEachCard(item)}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default React.memo(CardSwiper);
