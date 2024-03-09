import React from "react";
import { SERVICES, ABOUTUS } from "./constants";
import { Route, DropdownItem, Icon } from "./interfaces";
import Home from "./pages/index";
import Profolio from "./pages/Profolio";

const routes: Route[] = [
  {
    title: "HOME",
    href: "/",
    component: Home,
  },
  {
    title: "SERVICES",
    component: Home,
    href: "/services",
    dropdown: true,
    dropdownData: SERVICES,
    dropdownPath: (data: DropdownItem) => data.slug,
    listKey: (data: DropdownItem) => data.slug,
  },
  {
    title: "PORTFOLIO",
    component: Profolio,
    href: "/portfolio",
    dropdownPath: (data: DropdownItem) => data.slug,
    listKey: (data: DropdownItem) => data.slug,
  },
  {
    title: "FOR START-UP",
    component: Home,
    href: "/startup",
  },
  {
    title: "RECRUITMENT",
    component: Home,
    href: "/recruitment",
  },
  {
    title: "ABOUT US",
    component: Home,
    href: "/about-us",
    dropdownData: ABOUTUS,
    dropdownPath: (data: DropdownItem) => data.slug,
    listKey: (data: DropdownItem) => data.slug,
  },
  {
    title: "CONTACT US",
    component: Home,
    href: "/contactus",
  },
  {
    title: "INSIGHTS",
    component: Home,
    href: "/insights",
  },
];

export default routes;
