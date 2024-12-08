import { StyleProp, TextStyle } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export interface IconComponentProps {
  style?: StyleProp<TextStyle>;
  size?: number;
  color?: string;
  onPress?: () => void;
}

export interface IconProps extends IconComponentProps {
  name: IconKey;
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
  | "ingredient";

const icons: { [key in IconKey]: (props: IconComponentProps) => React.JSX.Element } = {
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
};

const Icon = ({ name, ...props }: IconProps) => {
  return icons[name](props);
};

export default Icon;
