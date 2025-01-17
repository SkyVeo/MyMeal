import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import React from "react";

import { globalStyles } from "@/constants/styles";
import sizes from "@/constants/sizes";
import { colors } from "@/constants/colors";

export interface ApplyButtonProps {
  onPress?: TouchableOpacityProps["onPress"];
}

const ApplyButton = ({ onPress }: ApplyButtonProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.title}>Show results</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: sizes.modalPadding,
    paddingVertical: 15,
  },
  buttonContainer: {
    width: "100%",
    backgroundColor: colors.light.backgroundTertiary,
    alignItems: "center",
    borderRadius: 25,
    padding: 10,
  },
  title: {
    ...globalStyles.medium,
    fontSize: 16,
    color: colors.light.background,
  },
});

export default ApplyButton;
