import React from "react";
import classNames from "classnames";

interface InputTextProps extends React.HTMLAttributes<HTMLInputElement> {
  className?: string;
}

const InputText: React.FC<InputTextProps> = (props: InputTextProps) => {
  const [value, setValue] = React.useState<string>("");
  const [focused, setFocused] = React.useState(false);

  return (
    <div
      className={classNames(
        "border-[1px] rounded p-3 my-12  border-white",
        props.className
      )}
    >
      <input
        className="bg-inherit outline-none w-full"
        placeholder={props.placeholder}
      ></input>
    </div>
  );
};

export default InputText;
