import { useRef, useState } from "react";
import { Animated, Dimensions, Easing, View } from "react-native";

export const usePopupMenu = () => {
    const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const touchableRef = useRef<View>(null);
    const scaleAnimation = useRef(new Animated.Value(0)).current;

    const animateVisibility = (isVisible: boolean) => {
        isVisible && setIsVisible(true);
        Animated.timing(scaleAnimation, {
            toValue: isVisible ? 1 : 0,
            duration: 200,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
        }).start(() => !isVisible && setIsVisible(false));
    };

    const animatedStyle = {
        opacity: scaleAnimation,
        transform: [{ translateY: scaleAnimation.interpolate({ inputRange: [0, 1], outputRange: [-10, 0] }) }],
    };

    const adjustMenuPosition = (px: number, py: number, width: number) => {
        const screenWidth = Dimensions.get("window").width;
        const offset = 10;
        const menuLeft = Math.min(Math.max(px, offset), screenWidth - width - offset);
        setMenuPosition({ top: py, left: menuLeft });
    };

    const handleOpen = () => {
        touchableRef.current?.measure((fx, fy, width, height, px, py) => {
            setMenuPosition({ top: py + height, left: px });
            animateVisibility(true);
        });
    };

    const handleClose = () => {
        animateVisibility(false);
    };

    return {
        animatedStyle,
        touchableRef,
        isVisible,
        menuPosition,
        adjustMenuPosition,
        handleOpen,
        handleClose,
    };
};
