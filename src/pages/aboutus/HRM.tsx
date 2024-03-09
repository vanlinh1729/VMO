import React from "react";
import SectionTitle from "../../components/shared/SectionTitle";
import { Manager } from "../../constants";

export default function () {
  return (
    <div>
      <div className=" py-32 bg-text relative w-full">
        <SectionTitle
          title="Company"
          description="We manufacture websites, mobile applications which cater to your every professional need."
          classDescription="w-full text-lg lg:text-center"
        ></SectionTitle>
      </div>
      <div>
        <div className=" flex space-x-10 justify-between items-center mb-20">
          <div className=" grow">
            <img
              className=""
              src="https://cdn.vmogroup.com/vmogroup-global/assets/img/hr/who_we_are.jpg"
            ></img>
          </div>
          <div className="flex flex-col space-y-6">
            <p className="font-[700] text-2xl">Who we are</p>
            <p>
              Established in 2012, VMO is a trusted IT outsourcing company based
              in Hanoi, Vietnam with 1000+ headcounts and over 40 projects
              currently running.
            </p>
            <p>
              About 10 years, we have successfully partnered with a various
              array of clients across industries. Startups & Innovation,
              Business Automation, E-Commerce, E-Health, E-Government,
              E-Learning, Financial Technology, are a few of the example
              sectors.
            </p>
          </div>
        </div>
        <div className=" flex space-x-10 justify-between items-center mb-20 ">
          <div className="flex flex-col space-y-6">
            <p className="font-[700] text-2xl">Our Vision</p>
            <p>
              About 10 years of development, with our knowledge of most advanced
              technologies and a team of enthusiastic and experienced engineers,
              VMO is proud to make important contributions to the success of
              more than 500 partners and many Startups.
            </p>
          </div>
          <div className=" grow">
            <img
              className=""
              src="https://www.vmogroup.com/static/media/our_vision_1.86a13cd1.jpg"
            ></img>
          </div>
        </div>
      </div>
      <SectionTitle
        title="MEET US"
        description="Every VMO employee adds a unique set of capabilities to the team, from our designers and developers who create cutting-edge websites that win awards to our project managers that guide clients through the creative process."
        classDescription="w-full text-lg lg:text-center"
      ></SectionTitle>
      <div className="bg-meetus bg-set text-white bg-primary"></div>
      <SectionTitle
        title="THE STAFF PROCESS"
        description="Every VMO employee adds a unique set of capabilities to the team."
        classDescription="w-full text-lg lg:text-center"
        classTitle=""
      ></SectionTitle>

      <div className="">
        <SectionTitle title="MANAGEMENT BOARD"></SectionTitle>
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-x-32 gap-y-20">
          {Manager.map((e, i) => {
            return (
              <div className="bg-white w-full text-center space-y-2 font-[700] p-4 h-[420px]">
                <div className="h-4/5">
                  <img
                    className="object-contain w-full h-full"
                    src={e.image}
                  ></img>
                </div>
                <p className="text-xl">{e.name}</p>
                <p>{e.position}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-set bg-slider3 flex  my-24  justify-between items-center px-8 py-14 text-white ">
        <p className="font-[700] text-[40px]">
          You share it We care <p className="text-secondary">IT</p>
        </p>
        <button className="hover:bg-secondary hover:border-secondary mt-8 p-8 font-[700] text-xl rounded-md text-md border-2 flex items-center justify-between ">
          Contact us
        </button>
      </div>
    </div>
  );
}
