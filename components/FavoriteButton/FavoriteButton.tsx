import { StyleProp, ViewStyle } from "react-native";

import Icon, { IconProps } from "@/components/Icon";
import { colors } from "@/constants/colors";
import Scale from "../Animation/Scale";

export interface FavoriteButtonProps {
  style?: StyleProp<ViewStyle>;
  favorite?: boolean;
  onPress?: (isFavorite: boolean) => void;
  icon?: IconProps;
  pressedIcon?: IconProps;
  hitSlop?: number;
}

const ICON_SIZE = 24;

const FavoriteButton = ({ style, favorite = false, onPress, icon, pressedIcon, hitSlop = 5 }: FavoriteButtonProps) => {
  const handlePress = () => {
    onPress?.(!favorite);
  };

  return (
    <Scale style={style} onPress={handlePress} hitSlop={hitSlop} onPressTiming="mid">
      {favorite ? (
        <Icon name="favorite" size={ICON_SIZE} color={colors.light.backgroundSecondary} {...pressedIcon} />
      ) : (
        <Icon name="favoriteBorder" size={ICON_SIZE} color={colors.light.text} {...icon} />
      )}
    </Scale>
  );
};

export default FavoriteButton;
