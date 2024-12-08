import React from "react";
import Icon, { IconComponentProps, IconProps } from "../Icon";

export interface SearchBarIconProps {
  defaultName: IconProps["name"];
  size?: IconProps["size"];
  icon?: React.JSX.Element | IconComponentProps | boolean | null;
}

const SearchBarIcon = ({ defaultName, size = 24, icon }: SearchBarIconProps) => {
  if (React.isValidElement(icon)) {
    return icon;
  }
  if (icon === false || icon === null) {
    return null;
  }
  return <Icon name={defaultName} size={size} {...(typeof icon === "object" && icon !== null ? icon : {})} />;
};

export default SearchBarIcon;
