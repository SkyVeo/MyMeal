import { Text, StyleSheet } from "react-native";

const Separator = () => {
  return <Text style={styles.separator}>|</Text>;
};

const COLOR_SEPARATOR = "#fff";

const styles = StyleSheet.create({
  separator: {
    color: COLOR_SEPARATOR,
    fontSize: 14,
    padding: 5,
    includeFontPadding: false,
    textAlignVertical: "center",
    fontFamily: "Poppins-Regular",
  },
});

export default Separator;
