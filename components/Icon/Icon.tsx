import React from "react";
import { StyleProp, TextStyle, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

export interface IconComponentProps {
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
}

export type IconKey =
  | "meal"
  | "shopping"
  | "search"
  | "cancel"
  | "menu"
  | "arrowUp"
  | "arrowDown"
  | "sort"
  | "back"
  | "check"
  | "up";

const icons: { [key in IconKey]: (props: IconComponentProps) => React.ReactNode } = {
  meal: (props) => <MaterialCommunityIcons name="silverware-fork-knife" {...props} />,
  shopping: (props) => <AntDesign name="shoppingcart" {...props} />,
  search: (props) => <AntDesign name="search1" {...props} />,
  cancel: (props) => <AntDesign name="close" {...props} />,
  menu: (props) => <MaterialCommunityIcons name="dots-vertical" {...props} />,
  arrowUp: (props) => <AntDesign name="arrowup" {...props} />,
  arrowDown: (props) => <AntDesign name="arrowdown" {...props} />,
  sort: (props) => <MaterialCommunityIcons name="sort" {...props} />,
  back: (props) => <Ionicons name="chevron-back-outline" {...props} />,
  check: (props) => <AntDesign name="check" {...props} />,
  up: (props) => <Ionicons name="chevron-up-outline" {...props} />,
};

export interface IconProps extends IconComponentProps {
  name: IconKey;
  onPress?: () => void;
}

const Icon = ({ name, size, color, style, onPress }: IconProps) => {
  const icon = icons[name]({ size, color, style });

  if (onPress) {
    return <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>;
  }
  return icon;
};

export default Icon;
