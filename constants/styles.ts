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
    // TODO modify depreacated
    shadow: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 0.25,
        shadowOpacity: 3.84,
        elevation: 5,
    },
});
