import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { ABOUTUS } from "../../constants";
import classNames from "classnames";
import HRM from "./HRM";
import TC from "./TC";

const AboutUs = () => {
  const { pathname } = useLocation();
  return (
    <div className="p-x-root mt-[120px]">
      <div>
        <div className="pt-48  ">
          <div className="shadow-md grid grid-cols-5 w-full  h-20">
            {ABOUTUS.map((e, i) => {
              return (
                <Link to={e.slug}>
                  <div
                    className={classNames(
                      "w-full h-full  capitalize box-border flex items-center font-[700] text-[16px] justify-center border-gray-900",
                      pathname === e.slug && "bg-secondary text-white"
                    )}
                  >
                    {e.title}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <Routes>
          <Route path="human-resource" element={<HRM />}></Route>
          <Route path="technical-capability" element={<TC />}></Route>
        </Routes>
      </div>
    </div>
  );
};
export default AboutUs;
