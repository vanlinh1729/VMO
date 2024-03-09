import React from "react";
import classNames from "classnames";

interface HightlightFirstWordProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  content: string;
  className?: string;
}

const HightlightFirstWord: React.FC<HightlightFirstWordProps> = ({
  content,
  className,
}) => {
  const fisrtWord: string = content.split(" ")[0];
  const rest: string = content.slice(fisrtWord.length);

  return (
    <div
      className={classNames(
        "flex align-center relative font-[700] md:text-[40px] text-2xl",
        className
      )}
    >
      <span className="relative z-0 ">
        <p>{fisrtWord}</p>
        <p className="absolute content-[''] bg-secondary w-full h-[50%] z-[-1] top-[50%] md:top-[70%] "></p>
      </span>
      <p className="ml-3">&#9;{rest}</p>
    </div>
  );
};

export default React.memo(HightlightFirstWord);
