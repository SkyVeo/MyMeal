import { Animated, Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";

import Icon, { IconProps } from "@/components/Icon";
import { useAnimation } from "@/hooks/useAnimation";

export interface FavoriteButtonProps {
  style?: StyleProp<ViewStyle>;
  favorite?: boolean;
  onToggle?: (isFavorite: boolean) => void;
  iconStyle?: IconProps["style"];
  iconColor?: IconProps["color"];
  activeIconColor?: IconProps["color"];
  iconSize?: IconProps["size"];
}

const FavoriteButton = ({
  style,
  favorite = false,
  onToggle,
  iconStyle,
  iconColor = "black",
  activeIconColor = "#ff7043",
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
      () => onToggle?.(!favorite)
    );
  };

  return (
    <Animated.View style={[styles.wrapper, style, { transform: [{ scale: scaleValue }] }]}>
      <Pressable hitSlop={5} onPress={onToggle && toggleFavorite}>
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

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 100,
  },
});

export default FavoriteButton;
