import { forwardRef } from "react";
import { PressableProps, Animated, StyleSheet, Pressable, View, GestureResponderEvent } from "react-native";

import { useTouchable } from "./Touchable.hooks";
import { useAnimation } from "@/components/Animation/useAnimation";

const DEFAULT_COLOR = "#52bfa3";

export interface TouchableProps extends PressableProps {
  highlightColor?: string;
}

const Touchable = forwardRef<View, TouchableProps>(
  (
    { highlightColor = DEFAULT_COLOR, hitSlop = 0, onPressIn, onPressOut, children, ...props }: TouchableProps,
    ref: React.ForwardedRef<View>
  ) => {
    const { animatedValue: opacity, animate, stopAnimation, sequence } = useAnimation();
    const { layout, handleLayout } = useTouchable(hitSlop);

    const handlePressIn = (event: GestureResponderEvent) => {
      onPressIn?.(event);
      animate();
    };

    const handlePressOut = (event: GestureResponderEvent) => {
      onPressOut?.(event);
      stopAnimation();
      sequence([{ duration: 0 }, { toValue: 0 }]);
    };

    return (
      <>
        <Animated.View
          style={{
            ...styles.highlight,
            ...layout,
            backgroundColor: highlightColor,
            opacity,
          }}
        />
        <Pressable
          ref={ref}
          onLayout={handleLayout}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          hitSlop={hitSlop}
          {...props}
        >
          {children}
        </Pressable>
      </>
    );
  }
);

const styles = StyleSheet.create({
  highlight: {
    position: "absolute",
    borderRadius: 100,
  },
});

export default Touchable;
