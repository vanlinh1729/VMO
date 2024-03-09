import {
  Swiper as ReactSwiper,
  SwiperSlide as ReactSwiperSlide,
} from "swiper/react";

import React, { useRef } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import type SwiperClass from "swiper/types/swiper-class";
import classNames from "classnames";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export type SwiperInstance = SwiperClass;
export interface SwiperProps extends React.ComponentProps<typeof ReactSwiper> {
  hideNavigation?: boolean;
  isOverflowHidden?: boolean;
  defaultActiveSlide?: number;
}

SwiperCore.use([Navigation, Pagination]);

export const Swiper: React.FC<SwiperProps> = ({
  children,
  hideNavigation,
  onInit,
  isOverflowHidden = false,
  className,
  defaultActiveSlide,
  ...props
}) => {
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <ReactSwiper
      className={classNames(
        "relative !overflow-hidden",
        // isOverflowHidden ? "" : "!overflow-visible",
        className
      )}
      navigation={true}
      pagination={{ clickable: true }}
      onInit={(swiper) => {
        // @ts-ignore
        // eslint-disable-next-line no-param-reassign
        swiper.params.navigation.prevEl = prevButtonRef.current;
        // @ts-ignore
        // eslint-disable-next-line no-param-reassign
        swiper.params.navigation.nextEl = nextButtonRef.current;
        swiper.navigation.update();

        onInit?.(swiper);
      }}
      {...props}
    >
      {children}

      {!hideNavigation && (
        <div
          // slot="container-"
          className="swiper-navigation absolute "
        >
          <button ref={nextButtonRef}>
            <FiChevronLeft></FiChevronLeft>
          </button>
          <button ref={prevButtonRef}>
            <FiChevronRight></FiChevronRight>
          </button>
        </div>
      )}
    </ReactSwiper>
  );
};

export const SwiperSlide = ReactSwiperSlide;

export default Swiper;
