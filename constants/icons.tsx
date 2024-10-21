import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface IconsType {
  [key: string]: React.ReactElement;
}

export const icons: IconsType = {
  meal: <MaterialCommunityIcons name="silverware-fork-knife" />,
  shopping: <AntDesign name="shoppingcart" />,
  search: <AntDesign name="search1" />,
  cancel: <AntDesign name="close" />
};
