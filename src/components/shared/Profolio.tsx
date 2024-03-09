import React from "react";
import { Link } from "react-router-dom";

const ProfolioItem = () => {
  return (
    <div className="group w-full h-[350px] overflow-hidden bg-white drop-shadow-md ">
      <div className="h-[200%]  relative">
        <div className="h-1/2 flex flex-col items-center">
          <img src="	https://cdn.vmogroup.com/vmogroup-global/assets/img/portfolio/img_drone_thumbnail.png"></img>
          <p className="font-[700] text-[20px]">Drone Delivery</p>
        </div>
        <div className="h-1/2 flex transition ease-in duration-500 z-1 flex-col group-hover:translate-y-[-100%] bg-[darkcyan] text-white items-center space-y-10 p-10">
          <p className="font-[700] text-xl">Drone Delivery</p>
          <p className=" text-center">
            A delivery-by-Drone project with amazing obstacle avoidance feature
            and more.
          </p>
          <div>
            <Link to="/">
              <p className="text-[18px]">View more</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfolioItem;
