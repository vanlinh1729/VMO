import React from "react";
import Banner from "../components/shared/Banner";
import ProfolioItem from "../components/shared/Profolio";

const Profolio = () => {
  return (
    <div className="">
      <Banner></Banner>
      <div className="p-x-root grid lg:grid-cols-4 grid-cols-1 mt-36 gap-6">
        <ProfolioItem></ProfolioItem>
        <ProfolioItem></ProfolioItem>
        <ProfolioItem></ProfolioItem>
        <ProfolioItem></ProfolioItem>
        <ProfolioItem></ProfolioItem>
        <ProfolioItem></ProfolioItem>
      </div>
    </div>
  );
};

export default Profolio;
