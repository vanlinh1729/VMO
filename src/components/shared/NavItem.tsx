import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../../interfaces";
import { IoMdArrowDropdown } from "react-icons/io";
import classNames from "classnames";
import { useLocation } from "react-router";
import { getPath } from "../../utils/index";

export interface NavItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
  path: string;
  className?: string;
  dropdown?: boolean;
  textPrimary: string;
  textHover: string;
  activeNav?: boolean;
  activeUnderline?: boolean;
}

const NavItem = (props: NavItemProps) => {
  const {
    path,
    className,
    dropdown,
    title,
    textHover,
    textPrimary,
    activeNav,
    activeUnderline,
  } = props;
  const [isActive, setIsActive] = React.useState<boolean>(false);
  const location = useLocation().pathname;

  const isActiveF = React.useEffect(() => {
    setIsActive(getPath(path, 1) === getPath(location, 1));
  }, [path, location]);

  return (
    <Link className="" to={path}>
      <div
        className={classNames(
          className,
          "flex align-center relative justify-between hover:translate-x-[1px] z-10 ",
          activeNav && isActive ? textHover : textPrimary,
          !activeNav && "hover:" + textHover
        )}
      >
        <span className="relative z-0 ">
          {title}{" "}
          {activeUnderline && isActive && (
            <p className="absolute content-[''] bg-secondary w-full h-2 z-[-1] top-[60%]"></p>
          )}
        </span>
        {dropdown && <IoMdArrowDropdown />}
      </div>
    </Link>
  );
};

export default React.memo(NavItem);
