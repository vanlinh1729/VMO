import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Swiper from "swiper/react";
import { BannerSlider } from "../../interfaces";

import { Link } from "react-router-dom";
import "swiper/css";

interface Props {
  data: BannerSlider;
}

const SwiperSlide = (props: Props) => {
  const { data } = props;
  return (
    <div
      className="text-white 
      w-full h-screen relative z-1"
    >
      <img
        className="object-cover h-full absolute w-full z-[-1]"
        src={data.bgImage}
      ></img>
      <div className="w-full h-full">
        <div className="z-[-1] absolute bg-[rgba(41,24,76,0.8)] o w-full lg:w-1/2 h-full float-left top-0"></div>
        <div className="absolute px-4 lg:left-[16%] font-semibold text-[40px] mt-[60px] uppercase ">
          Best Works
        </div>
        <div className="px-4">
          <div className=" absolute lg:w-[37%] h-full w-full lg:left-[16%]">
            <div className="lg:w-[635px] w-full bg-[rgba(255,111,0,0.8)] flex-col p-8 items-start justify-center mt-40 uppercase space-y-6">
              <p className="font-[700] text-[40px]">{data.field}</p>
              <p className="font-[500] text-[25px]">{data.description}</p>
            </div>
            <div className="mt-20">
              <p className="text-[24px] semibol mb-8">Mobio</p>
              <p className="lg:w-3/4">{data.details}</p>
            </div>
            <button className="m-auto lg:float-left mt-8 p-4 font-[700] rounded-md text-md border-2 flex items-center justify-between ">
              {" "}
              View Product
              <HiArrowNarrowRight className="ml-4"></HiArrowNarrowRight>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SwiperSlide;
