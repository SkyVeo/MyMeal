import { IconComponentProps, IconKey, icons } from "./Icons";

export interface IconProps extends IconComponentProps {
  name?: IconKey;
}

const Icon = ({ name, ...props }: IconProps) => {
  return name ? icons[name](props) : null;
};

export default Icon;
