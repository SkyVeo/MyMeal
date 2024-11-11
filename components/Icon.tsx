import React from "react";
import { Pressable, StyleProp, TextStyle, TouchableOpacity, StyleSheet, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

export interface IconComponentProps {
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
}

export type IconKey = "meal" | "shopping" | "search" | "cancel" | "menu" | "arrowUp" | "arrowDown" | "sort" | "back" | "check";

const icons: { [key in IconKey]: (props?: IconComponentProps) => React.ReactNode } = {
  meal: (props) => (
    <MaterialCommunityIcons name="silverware-fork-knife" size={props?.size} color={props?.color} style={props?.style} />
  ),
  shopping: (props) => <AntDesign name="shoppingcart" size={props?.size} color={props?.color} style={props?.style} />,
  search: (props) => <AntDesign name="search1" size={props?.size} color={props?.color} style={props?.style} />,
  cancel: (props) => <AntDesign name="close" size={props?.size} color={props?.color} style={props?.style} />,
  menu: (props) => (
    <MaterialCommunityIcons name="dots-vertical" size={props?.size} color={props?.color} style={props?.style} />
  ),
  arrowUp: (props) => <AntDesign name="arrowup" size={props?.size} color={props?.color} style={props?.style} />,
  arrowDown: (props) => <AntDesign name="arrowdown" size={props?.size} color={props?.color} style={props?.style} />,
  sort: (props) => <MaterialCommunityIcons name="sort" size={props?.size} color={props?.color} style={props?.style} />,
  back: (props) => (
    <Ionicons name="chevron-back-outline" size={props?.size} color={props?.color} style={props?.style} />
  ),
  check: (props) => <AntDesign name="check" size={props?.size} color={props?.color} style={props?.style} />,
};

export interface IconProps extends IconComponentProps {
  name: IconKey;
  onPress?: () => void;
}

export default function Icon({ name, size, color, style, onPress }: IconProps) {
  const IconComponent = icons[name];
  if (onPress) {
    return <TouchableOpacity onPress={onPress}>{IconComponent({ size, color, style })}</TouchableOpacity>;
  }
  return IconComponent({ size, color, style });
}
