import { StyleProp, TextStyle } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export interface IconComponentProps {
  style?: StyleProp<TextStyle>;
  size?: number;
  color?: string;
  onPress?: () => void;
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
  | "up"
  | "favorite"
  | "favoriteBorder"
  | "clock"
  | "ingredient"
  | "filter"
  | "star";

export const icons: { [key in IconKey]: (props: IconComponentProps) => React.JSX.Element } = {
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
  favorite: (props) => <MaterialIcons name="favorite" {...props} />,
  favoriteBorder: (props) => <MaterialIcons name="favorite-border" {...props} />,
  clock: (props) => <Feather name="clock" {...props} />,
  ingredient: (props) => <FontAwesome6 name="carrot" {...props} />,
  filter: (props) => <FontAwesome name="sliders" {...props} />,
  star: (props) => <FontAwesome name="star" {...props} />,
};
