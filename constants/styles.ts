import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    regular: {
        includeFontPadding: false,
        fontFamily: "Poppins-Regular",
    },
    medium: {
        includeFontPadding: false,
        fontFamily: "Poppins-Medium",
    },
    bold: {
        includeFontPadding: false,
        fontFamily: "Poppins-Bold",
    },
    shadow: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
    },
});
