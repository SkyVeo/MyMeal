import { useState } from "react";
import { Insets, LayoutChangeEvent } from "react-native";

export const useTouchable = (hitSlop?: number | Insets | null) => {
    const [layout, setLayout] = useState({ width: 0, height: 0, x: 0, y: 0 });

    const handleLayout = (event: LayoutChangeEvent) => {
        const { width, height, x, y } = event.nativeEvent.layout;
        setLayout({ width, height, x, y });
    };

    const calculateHitSlop = () => {
        if (typeof hitSlop === "number") {
            return {
                top: hitSlop,
                left: hitSlop,
                bottom: hitSlop,
                right: hitSlop,
            };
        }
        return {
            top: hitSlop?.top ?? 0,
            left: hitSlop?.left ?? 0,
            bottom: hitSlop?.bottom ?? 0,
            right: hitSlop?.right ?? 0,
        };
    };

    const getHighlightLayout = () => {
        const { top, left, bottom, right } = calculateHitSlop();
        return {
            width: layout.width + left + right,
            height: layout.height + top + bottom,
            top: layout.y - top,
            left: layout.x - left,
        };
    };

    return { layout: getHighlightLayout(), handleLayout };
};
