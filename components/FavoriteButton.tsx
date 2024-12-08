import { Animated, Pressable, StyleProp, ViewStyle } from "react-native";

import Icon, { IconProps } from "@/components/Icon";
import { useAnimation } from "@/hooks/useAnimation";
import { colors } from "@/constants/colors";

export interface FavoriteButtonProps {
  style?: StyleProp<ViewStyle>;
  favorite?: boolean;
  onPress?: (isFavorite: boolean) => void;
  iconStyle?: IconProps["style"];
  iconColor?: IconProps["color"];
  activeIconColor?: IconProps["color"];
  iconSize?: IconProps["size"];
}

// TODO give the option to change the icon
const FavoriteButton = ({
  style,
  favorite = false,
  onPress,
  iconStyle,
  iconColor = colors.light.text,
  activeIconColor = colors.light.backgroundSecondary,
  iconSize = 24,
}: FavoriteButtonProps) => {
  const INITIAL_SCALE = 1;
  const SCALING_FACTOR = 0.2;
  const SCALE_DURATION = 100;

  const { animatedValue: scaleValue, sequence } = useAnimation(INITIAL_SCALE);

  const toggleFavorite = () => {
    sequence(
      [
        { toValue: INITIAL_SCALE + SCALING_FACTOR, duration: SCALE_DURATION },
        { toValue: INITIAL_SCALE, duration: SCALE_DURATION },
      ],
      () => onPress?.(!favorite)
    );
  };

  return (
    <Animated.View style={[style, { transform: [{ scale: scaleValue }] }]}>
      <Pressable hitSlop={5} onPress={onPress && toggleFavorite}>
        <Icon
          name={favorite ? "favorite" : "favoriteBorder"}
          style={iconStyle}
          color={favorite ? activeIconColor : iconColor}
          size={iconSize}
        />
      </Pressable>
    </Animated.View>
  );
};

export default FavoriteButton;
