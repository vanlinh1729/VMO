import React from "react";
import HightlightFirstWord from "../../components/shared/HightlightFirstWord";
import SectionTitle from "../../components/shared/SectionTitle";
import { whyODC, OurODC } from "../../constants";

const ODC = () => {
  return (
    <>
      <div className="p-x-root py-32 bg-text relative w-full">
        <div className="px-16 py-20 drop-shadow-md bg-white">
          <div className="mx-auto mb-12 flex items-center justify-center">
            <HightlightFirstWord
              className="text-primary uppercase font-[700]  text-[40px] "
              content="OFFSHORE DEVELOPMENT CENTER (ODC)"
            />
          </div>
          <div className="flex flex-col space-y-10">
            <p>
              <b>ODC</b> is the ideal choice for companies that don’t have an
              internal IT department capable of the full cycle of software
              development and would like to outsource the whole IT processes on
              VMO premise.
            </p>
            <p>
              Client pays monthly cost that saves <b>35% - 60% </b> compared to
              onsite teams and traditional outsourcing. ODC by is made up of a
              dedicated team of managers and developers who have been handpicked
              and trained by VMO to complement the customer’s skill set and
              culture.
            </p>
            <p>
              This customized team works exclusively on behalf of the customer
              and is an extension of their in-house team. The infrastructure and
              security can be designed to meet the customer’s specific standards
              and specifications, and may include co-branding.
            </p>
          </div>
        </div>
      </div>
      <SectionTitle title="Why OCD ?">
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-x-10 gap-y-20">
          {whyODC.map((e, id) => (
            <div
              key={id}
              className="relative w-full h-48 bg-white drop-shadow-md "
            >
              <div className=" mt-10 w-full text-center flex  items-center justify-center">
                <p className=" font-[700] text-xl ">{e.title}</p>
              </div>
              <img
                className="  absolute right-[50%] top-0 translate-y-[-50%] translate-x-[50%]"
                src={e.img}
              ></img>
            </div>
          ))}
        </div>
      </SectionTitle>

      <div className="p-x-root">
        <div className="bg-set bg-slider3 flex  justify-between items-center px-8 py-14 text-white ">
          <p className="font-[700] text-[40px]  ">
            You share it We care <p className="text-secondary">IT</p>
          </p>
          <button className="hover:bg-secondary hover:border-secondary mt-8 p-8 font-[700] text-xl rounded-md text-md border-2 flex items-center justify-between ">
            Contact us
          </button>
        </div>
      </div>
      <SectionTitle title="OUR SERVICES">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 ">
          {OurODC.map((e, id) => (
            <div
              key={id}
              className="text-center w-full  h-[350px] flex flex-col items-center justify-evenly bg-white drop-shadow-md "
            >
              <img className="  " src={e.img}></img>
              <p className="  font-[700] text-xl w-3/4">{e.title}</p>
            </div>
          ))}
        </div>
      </SectionTitle>
    </>
  );
};

export default ODC;
