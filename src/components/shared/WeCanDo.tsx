import React from "react";
import { Banner } from "../../interfaces";
import { BannerList } from "../../constants";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { HiArrowNarrowRight } from "react-icons/hi";

const list: Banner[] = BannerList.filter((e) => e.logoImage != null);

const WCD = () => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  return (
    <div className="drop-shadow-md flex-col hidden sm:block space-y-16 bg-white leading-6 p-12">
      <div className="flex space-x-2 justify-between">
        {list.map((e, i) => {
          return (
            <div
              key={i}
              className={classNames(
                "group  w-40 pb-4 cursor-pointer flex-col relative text-xl text-center",
                activeIndex == i
                  ? "border-b-[10px] border-secondary"
                  : "hover:border-b-[10px] hover:border-gray-100"
              )}
              onClick={() => setActiveIndex(i)}
            >
              <div className="flex items-center justify-center mb-8">
                <img src={e.logoImage}></img>
              </div>
              <p className="text-[16px] text-primary font-[700] ">{e.title}</p>
              {activeIndex == i ? (
                <motion.div className="absolute content-[''] arrow-down text-secondary translate-x-1/2 right-1/2 bottom-[-17px]"></motion.div>
              ) : (
                <p className="absolute content-[''] arrow-down hidden group-hover:block text-gray-100 translate-x-1/2 right-1/2 bottom-[-17px]"></p>
              )}
            </div>
          );
        })}
      </div>
      <p className="mt-12">{list[activeIndex].details}</p>
      <div>
        <Link to={list[activeIndex].path}>
          <button className="flex items-center uppercase text-lg hover:text-secondary  font-[700] ">
            Read more <HiArrowNarrowRight className="ml-4"></HiArrowNarrowRight>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default React.memo(WCD);
