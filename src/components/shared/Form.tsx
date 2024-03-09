import React from "react";
import Input from "./InputText";

interface Props extends HTMLInputElement {}

const Form = () => {
  return (
    <form className="grid bg-inherit grid-cols-1 xl:grid-cols-2 gap-x-[30px]">
      <div>
        <Input placeholder="Name" className="h-[60px] items-center"></Input>
        <Input placeholder="Name" className="h-[60px] items-center"></Input>
        <Input placeholder="Name" className="h-[60px] items-center"></Input>
      </div>

      <Input placeholder="Massage" className="h-1/2"></Input>

      <div></div>
    </form>
  );
};
export default React.memo(Form);
