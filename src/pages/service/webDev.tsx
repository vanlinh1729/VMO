import React from "react";
import HightlightFirstWord from "../../components/shared/HightlightFirstWord";
import SectionTitle from "../../components/shared/SectionTitle";
import { whyOurSourceVMO, OSVMObile } from "../../constants";

const WebDev = () => {
  return (
    <>
      <div className="xl:px-[200px] py-32 bg-text relative w-full">
        <div className="px-16 py-20 ">
          <div className="mx-auto mb-12 flex items-center justify-center">
            <HightlightFirstWord
              className="text-primary uppercase font-[700]  text-[40px] "
              content="WEB AND WEB-APP DEVELOPMENT"
            />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex-col space-y-8 leading-8">
              <p>
                With more than 100 successful projects of varying scale and
                complexity, VMO’s portfolio includes single page websites,
                corporate sites, healthcare portals, directory sites, Website
                products and support websites, blogs…for clients in various
                sectors: Startups & Innovation, Business Automation, E-Commerce,
                E-Health, E-Government, E-Learning, Financial Technology and
                Media & Entertainment.
              </p>
              <p>
                Our flagship team in engineering and development routinely build
                powerful web applications with scalable features. Outsourcing
                your web project to us means implementation of latest
                technologies, customer satisfaction and retention of competitive
                edge!
              </p>
            </div>
            <img src="https://www.vmogroup.com/static/media/img_web_graphic.f5cf050b.png"></img>
          </div>
        </div>
      </div>
      <SectionTitle title="WHY OUTSOURCE TO VMO ?">
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-x-10 gap-y-20 mt-20">
          {whyOurSourceVMO.map((e, id) => (
            <div
              key={id}
              className="relative w-full h-48 bg-white drop-shadow-md "
            >
              <div className=" mt-10 w-full text-center flex items-center justify-center">
                <p className=" font-[700] text-xl w-3/4">{e.title}</p>
              </div>
              <img
                className="  absolute right-[50%] top-0 translate-y-[-50%] translate-x-[50%]"
                src={e.img}
              ></img>
            </div>
          ))}
        </div>
      </SectionTitle>
      <SectionTitle title="Our Service">
        <div className="md:flex hidden p-x-root w-full drop-shadow-md p-6">
          <div className="flex"></div>
        </div>
      </SectionTitle>
    </>
  );
};

export default WebDev;
