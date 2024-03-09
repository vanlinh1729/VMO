import React from "react";

interface Props {
  imgLink: string;
}
const GridLogoItem: React.FC<Props> = (props: Props) => {
  return (
    <div className="h-46 ">
      <div className="border-2 h-full px-3  border-[rgba(255,111,0,0.1)] flex items-center justify-center 4 bg-white">
        <img className="w-full h-full object-contain" src={props.imgLink}></img>
      </div>
    </div>
  );
};

export default React.memo(GridLogoItem);
