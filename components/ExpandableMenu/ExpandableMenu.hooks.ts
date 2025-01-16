import { useState } from "react";
import { useAnimation } from "../Animation/useAnimation";
import { LayoutChangeEvent } from "react-native";

export const useExpandableMenu = (animationDuration: number = 200) => {
    const [expanded, setExpanded] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);
    const { animatedValue: height, animate } = useAnimation();

    const toggleMenu = () => {
        setExpanded(!expanded);
        animate({
            toValue: expanded ? 0 : contentHeight,
            duration: animationDuration,
            useNativeDriver: false,
        });
    };

    const handleContentLayout = (event: LayoutChangeEvent) => {
        setContentHeight(event.nativeEvent.layout.height);
    };

    return { height, expanded, toggleMenu, handleContentLayout };
};
