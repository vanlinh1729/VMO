import React from "react";

export interface Route {
  title: string;
  href: string;
  component: React.ComponentType;
  dropdown?: boolean;
  dropdownData?: any[];
  header?: boolean;
  dropdownPath?: (data: any) => string;
  listKey?: (data: any) => string;
  navigation?: boolean;
  icon?: React.ComponentType<Icon>;
}

export interface Icon {
  size?: number;
  className?: string;
}
export interface DropdownItem {
  title: string;
  slug: string;
}

export interface SubRouter {
  slug: string;
  title: string;
  leftIcon?: React.ComponentType<Icon>;
  RightIcon?: React.ComponentType<Icon>;
}

export interface Quote {
  auhor: string;
  from: string;
  content: string;
  avatarPath?: string;
}

export interface Banner {
  title: string;
  description: string;
  path: string;
  text: string;
  details?: string;
  logoImage?: string;
}

export interface Link {
  path: string;
  newTab?: boolean;
}

export interface BannerSlider {
  productImg: string;
  bgImage: string;
  field: string;
  description: string;
  productName: string;
  details: string;
}

export interface FormValue {
  name?: string;
  email?: string;
  phoneNumber?: string;
}
