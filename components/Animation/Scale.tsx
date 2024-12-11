import { Animated, GestureResponderEvent, Pressable, PressableProps, StyleProp, ViewStyle } from "react-native";

import { useAnimation } from "@/components/Animation/useAnimation";

export interface ScaleProps extends PressableProps {
  style?: StyleProp<ViewStyle>;
  initialScale?: number;
  scalingFactor?: number;
  duration?: number;
  onPressTiming?: "before" | "mid" | "after";
}

const Scale = ({
  style,
  initialScale = 1,
  scalingFactor = 0.2,
  duration = 100,
  onPress,
  onPressTiming = "after",
  children,
  ...props
}: ScaleProps) => {
  const { animatedValue: scaleValue, animate } = useAnimation(initialScale);

  const handleToggle = (event: GestureResponderEvent) => {
    onPressTiming === "before" && onPress?.(event);

    animate({ toValue: initialScale + scalingFactor, duration }, () => {
      onPressTiming === "mid" && onPress?.(event);
      
      animate({ toValue: initialScale, duration }, () => {
        onPressTiming === "after" && onPress?.(event);
      });
    });
  };

  return (
    <Animated.View style={[style, { transform: [{ scale: scaleValue }] }]}>
      <Pressable onPress={handleToggle} {...props}>
        {children}
      </Pressable>
    </Animated.View>
  );
};

export default Scale;
