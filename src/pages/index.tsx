import React from "react";
import Banner from "../components/shared/Banner";
import { Whoweare, SwiperBanner, logoGridList } from "../constants";
import { BannerSlider } from "../interfaces";
import HightlightFirstWord from "../components/shared/HightlightFirstWord";
import SectionCircleItem from "../components/shared/SectionCircleItem";
import Swiper from "../components/shared/Swiper";
import BannerSwiper from "../components/shared/BannerSlider";
// import Quote from "../components/shared/Quotes";
import LogoItem from "../components/shared/GridLogo";
import WeCanDo from "../components/shared/WeCanDo";
import ODM from "../components/shared/OurDomain";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <div className="p-x-root py-24">
        <div className="w-full flex-wrap box-border">
          <div className="grow-0 max-w-1/3 basis-1/3">
            <HightlightFirstWord
              className="text-primary font-[600] text-[40px] "
              content="WHO WE ARE ?"
            />
            <div className="flex-col space-y-[50px] py-6">
              <p className="text-[#a57549]">
                We are together with customers to create products that are
                valuable and meaningful to the community.
              </p>
              <p>
                VMO is a flagship team in engineering and development. We
                routinely make excellent and profitable applications for clients
                in all sectors: Digital Transformation, Blockchain, Cloud
                Computing, Start-ups & Innovation, Business Automation,
                E-commerce, E-Health, E-Government, E-Learning, Financial
                Technology, Media & Entertainment.
              </p>
              <p>
                Our strength lies in understanding the client's business
                processes, culture, vision and goals across the industry
                segments and offering client oriented solutions which are highly
                reliable, ensuring adaptability to client needs, and thus
                bringing out the most innovative solutions in every business and
                technology domain.
              </p>
            </div>
          </div>
          <div className="h-[573px] w-[800px] relative p-[30px]">
            {Whoweare.map((el, i) => {
              return (
                <SectionCircleItem
                  key={i}
                  amount={el.amount}
                  color={el.color}
                  size={el.size}
                  posX={el.posX}
                  posY={el.posY}
                  title={el.title}
                  plus={el.plus}
                ></SectionCircleItem>
              );
            })}
          </div>
        </div>
      </div>
      <BannerSwiper data={SwiperBanner}></BannerSwiper>
      <div className="p-x-root py-32 bg-text relative w-full text-center">
        <div className="mx-auto mb-12 flex items-center justify-center">
          <HightlightFirstWord
            className="text-primary uppercase font-[700]  text-[40px] "
            content="Our customers"
          />
        </div>
        <p>Learn firsthand what our customers think about working with us.</p>
        {/* <Quote></Quote> */}
        <div className="grid md:grid-cols-4   grid-cols-2  gap-4">
          {logoGridList.map((item, i) => {
            return <LogoItem imgLink={item.imgLink} key={i}></LogoItem>;
          })}
        </div>
      </div>
      <div className="p-x-root py-32 bg-text relative w-full ">
        <div className="g mb-12 lg:flex items-center justify-center">
          <HightlightFirstWord
            className="text-primary uppercase font-[700]  text-[40px] "
            content="WHAT WE CAN DO"
          />
        </div>
        <p className="w-3/4 mb-16">
          Whether you are a start-up or an established business, we are ready to
          assist you at every stage of the software development life cycle
          comprising creative software design, business analysis backed by
          prototyping and data visualization services, QA and testing
          activities, development itself, hosting, support and maintenance.
        </p>
        <WeCanDo></WeCanDo>
      </div>
      <div className="p-x-root py-32 bg-text  w-full ">
        <div className="g mb-12 lg:flex items-center justify-center">
          <HightlightFirstWord
            className="text-primary uppercase font-[700]  text-[40px] "
            content="OUR DOMAINS"
          />
        </div>
        <p className="w-3/4 mb-16 flex  items-center justify-center">
          Here, We make almost every genre of applications. You name it and we
          build it..
        </p>
        <div>
          <ODM></ODM>
        </div>
      </div>
    </div>
  );
};

export default Home;
