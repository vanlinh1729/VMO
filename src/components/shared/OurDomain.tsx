import React from "react";
import { OurDomains } from "../../constants";

const ODM = () => {
  return (
    <div className="grid-cols-4 gap-5 lg:grid hidden px-12">
      {OurDomains.map((e, i) => {
        return (
          <div
            key={i}
            className="group w-full flex-col h-[255px] drop-shadow-md overflow-hidden relative"
          >
            <div className="absolute w-full left-0 bottom-[-100%] h-[200%] group-hover:translate-y-[-50%] transition ease duration-1000">
              <div className="w-full h-1/2 relative bg-white flex flex-col items-center justify-center">
                <img src={e.img}></img>
                <p className="w-[85%] mt-12 text-center font-[700] text-xl">
                  {e.title}
                </p>
              </div>
              <div className="w-full h-1/2 relative flex-col px-5 leading-10  pt-8 bg-primary text-white">
                <p className="text-center font-[700] text-lg">{e.title}</p>
                <ul className="list-disc">
                  <li>Stock market trading platform</li>
                  <li>Stock market trading platform</li>
                  <li>Stock market trading platform</li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ODM;
