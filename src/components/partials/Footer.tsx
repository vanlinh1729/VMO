import React from "react";
import { SERVICES, ABOUTUS } from "../../constants";
import HightlightFirstWord from "../shared/HightlightFirstWord";
import Input from "../shared/InputText";
import ColumnNav from "../shared/ColumnNav";
import Form from "../shared/Form";

const Footer = () => {
  return (
    <div className="">
      <div className=" pb-32 pt-7 xl:px-56 px-4 text-white w-full h-full bg-no-repeat flex-col items-center justify-center bg-center footer-top bg-cover">
        <HightlightFirstWord
          className="semibold text-[35px]"
          content="LET'S BUILD SOMETHING GREAT TOGETHER"
        />
        <p className="my-10">
          Whatever your ambition, we’d love to design and build your next big
          idea or lend a hand on an existing one.
        </p>
        <Form></Form>
      </div>

      <div className="bg-primary px-4 xl:px-[200px] py-[100px] flex space-x-14">
        <ColumnNav listNav={ABOUTUS} title="About us"></ColumnNav>
        <ColumnNav listNav={SERVICES} title="Sevices"></ColumnNav>
      </div>
      <div className="bg-[#0c031c]  xl:px-[200px] p-4 text-white flex space-x-9 ">
        <p>© 2021 VMO JSC. All rights reserved.</p>
        <a href="/privacy-policy">Privacy Policy</a>
      </div>
    </div>
  );
};

export default React.memo(Footer);
