/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#309D81";
const tintColorDark = "#fff";

const tint = "#FFA500";

const light = {
    text: "#333333",
    secondaryText: "#9a9eb9",
    background: "#309D81",
    tileBackground: "#f6f6f6",
    border: "#E5E5E5",
    tint: tintColorLight,
    icon: "#9a9eb9",
    tabBar: "#fff",
    tabIconDefault: "#a0d6c8",
    tabIconSelected: tintColorLight,
}

const dark = {
    // subtitle color: "#CDCDE0",
    // tile backgroundColor: "#1e1e2e",
    // placeholderTextColor="#CDCDE0"
    text: "#ECEDEE",
    // background: "#3a3d53",
    background: "#161622",
    border: "#232533",
    tint: tint,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tint,
}

export const colors = {
    light: {
        text: "#11181C",
        textSecondary: "#6e6e6e",
        background: "#fff",
        backgroundSecondary: "#ff7043",
        tint: "#e7e7e7",
        icon: "#687076",
        highlight: "rgba(255, 145, 107, 0.7)",
        tabIconDefault: "#687076",
        tabIconSelected: "#ff7043",
    },
    dark: light,
};
