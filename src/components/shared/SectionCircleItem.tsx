import React from "react";
import classNames from "classnames";

enum Variant {
  RED,
  YELLOW,
  GREEN,
  BLUE,
  PURPLE,
  LIGHTBLUE,
}
enum Size {
  MEDIUM,
  LARGE,
  SMALL,
  XL,
  XXL,
}

enum Pos {
  LT,
  MT,
  RT,
  LC,
  MC,
  RC,
  LB,
  MB,
  RB,
}
type Props = {
  variant: Variant;
  children?: React.ReactNode;
  size: Size;
};
const SIZE_MAPS: Record<Size, string> = {
  [Size.MEDIUM]: "w-[200px] h-[200px]",
  [Size.XL]: "w-[220px] h-[220px]",
  [Size.XXL]: "w-[240px] h-[240px]",
  [Size.SMALL]: "w-[180px] h-[180px]",
  [Size.LARGE]: "w-[150px] h-[150px]",
};
const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.RED]: "text-[#ff6f00]",
  [Variant.YELLOW]: "text-[#e6c400]",
  [Variant.GREEN]: "text-[#3d00ad]",
  [Variant.BLUE]: "text",
  [Variant.PURPLE]: "text",
  [Variant.LIGHTBLUE]: "text-",
};

interface PropsItem {
  size: number;
  color: string;
  amount: number;
  plus: boolean;
  title: string;
  posX: number;
  posY: number;
}

const Item = (props: PropsItem) => {
  const { color, amount, plus, title, size, posY, posX } = props;

  const sizeP = `w-[${size}px] h-[${size}px]`;
  const positionY = `top-[${posY}%]`;
  const positionX = `right-[${posX}%]`;
  const colorText = `text-[${color}]`;

  return (
    <div
      className={classNames(
        "absolute drop-shadow-xl flex items-center  justify-center bg-white rounded-[50%] -translate-x-[50%] -translate-y-[50%]",

        sizeP,
        positionY,
        positionX
      )}
    >
      <div>
        <p
          className={classNames(
            `font-[700] text-[30px]`,
            colorText && colorText
          )}
        >{`${plus ? amount + "+" : amount}`}</p>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Item;
