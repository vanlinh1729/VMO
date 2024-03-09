import React from "react";
import NavItem, { NavItemProps } from "./NavItem";
import { SERVICES, ABOUTUS } from "../../constants";
import { SubRouter } from "../../interfaces";

interface ColumnNavItemProps extends NavItemProps {
  icon?: React.ComponentType<any>;
}
interface ColumnNav {
  title: string;
  listNav: SubRouter[];
  className?: string;
}

const ColumnNav = (props: ColumnNav) => {
  return (
    <div className="flex-col">
      <div className="font-[700] mb-[20px] text-white text-[20px]">
        {props.title}
      </div>
      <div className="flex-col flex space-y-4">
        {props.listNav.map((item, i) => {
          return (
            <NavItem
              key={i}
              title={item.title}
              path={item.slug}
              textPrimary="text-white"
              textHover="text-secondary"
              className="w-[150px]"
            ></NavItem>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(ColumnNav);
