import React from "react";
import HightlightFirstWord from "../../components/shared/HightlightFirstWord";
import SectionTitle from "../../components/shared/SectionTitle";
import { whyOurSourceVMO, OSVMObile } from "../../constants";

const ODC = () => {
  return (
    <>
      <div className="xl:px-[200px] py-32 bg-text relative w-full">
        <div className="px-16 py-20 ">
          <div className="mx-auto mb-12 flex items-center justify-center">
            <HightlightFirstWord
              className="text-primary uppercase font-[700]  text-[40px] "
              content="MOBILE DEVELOPMENT   "
            />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex-col space-y-8 leading-8">
              <p>
                Mobile apps are changing every aspect of our lives, from
                ordering food to buying tickets, there is an app for everything.
                It becomes critical for business to engage their audience
                through amazing mobile experience to increase the business
                growth.
              </p>
              <p>
                We build native, hybrid, and cross-platform apps that run on all
                major operating systems such as: iOS, Android, Window Phone,...
                As part of the development process, mobile user interface (UI)
                design is also essential in the creation of mobile apps. Mobile
                UI considers constraints, contexts, screen, input, and mobility
                as outlines for design. The user is often the focus of
                interaction with their device so that our motto is making our
                products beautifully designed, simple to use while ensuring
                intricate and feature-rich functionality.
              </p>
            </div>
            <img src="https://www.vmogroup.com/static/media/img_mobile_dev.7dec2266.png"></img>
          </div>
        </div>
      </div>
      <SectionTitle title="Why OCD ?">
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-x-10 gap-y-20">
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
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-10 gap-y-20">
          {OSVMObile.map((e) => (
            <div
              key={e.title}
              className="flex-col text-center flex items-center justify-start space-y-5 "
            >
              <div className="w-24 h-24 bg-white drop-shadow-md flex-col text-center flex items-center justify-center">
                <img src={e.img}></img>
              </div>
              <p className="font-[700] text-xl">{e.title}</p>
              <p>{e.description}</p>
            </div>
          ))}
        </div>
      </SectionTitle>
    </>
  );
};

export default ODC;
