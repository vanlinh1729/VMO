import React from "react";
import Banner from "../../components/shared/Banner";
import routes from "../../routes";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import classNames from "classnames";
import { Route, Routes } from "react-router";
import ODC from "./odc";
import MobileDev from "./mobileDev";
import WebDev from "./webDev";

const seviceslist = routes.find((e) => e.title === "SERVICES")?.dropdownData;

const Services = () => {
  const { pathname } = useLocation();
  return (
    <div className="">
      <Banner></Banner>

      <div className=" hidden lg:flex xl:px-[200px]  h-[105px]  absolute  top-[650px] bg-[rgba(20,0,57,0.7)]  ">
        {seviceslist?.map((e, i) => {
          return (
            <Link to={e.slug}>
              <div
                className={classNames(
                  "p-6 font-[700] text-lg text-center text-white",
                  pathname == e.slug && "bg-secondary"
                )}
              >
                {e.title}
              </div>
            </Link>
          );
        })}
      </div>
      <Routes>
        <Route path="odc" element={<ODC />}></Route>
        <Route
          path="mobile-development"
          element={<MobileDev></MobileDev>}
        ></Route>
        <Route
          path="web-and-web-app-development"
          element={<WebDev></WebDev>}
        ></Route>
      </Routes>
    </div>
  );
};

export default Services;
