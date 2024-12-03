import { useRef } from "react";
import { Animated, EasingFunction } from "react-native";

export interface AnimationConfig {
    toValue?: number;
    duration?: number;
    easing?: EasingFunction;
    useNativeDriver?: boolean;
    delay?: number;
}

export const useAnimation = (initialValue: number = 0) => {
    const animatedValue = useRef(new Animated.Value(initialValue)).current;

    const animation = (config: AnimationConfig = {}) => {
        const { toValue = 1, duration = 200, easing, useNativeDriver = true, delay } = config;
        return Animated.timing(animatedValue, {
            toValue,
            duration,
            easing,
            useNativeDriver,
            delay,
        });
    };

    const animate = (config: AnimationConfig = {}, callback?: () => void) => {
        animation(config).start(callback);
    };

    const stopAnimation = () => {
        animatedValue.stopAnimation();
    };

    const resetAnimation = (value?: number) => {
        animatedValue.setValue(value ?? initialValue);
    };

    const sequence = (configs: AnimationConfig[], callback?: () => void) => {
        Animated.sequence(configs.map((config) => animation(config))).start(callback);
    };

    return { animatedValue, animation, animate, stopAnimation, resetAnimation, sequence };
};
