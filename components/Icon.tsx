import React, { ReactElement } from "react";

interface IconProps {
  icon: ReactElement;
  size?: number;
  style?: object;
}

export default function Icon({ icon, size, style }: IconProps) {
  return React.cloneElement(icon, { size, style });
}
