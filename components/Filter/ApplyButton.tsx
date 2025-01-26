import { StyleSheet, View } from "react-native";
import React from "react";

import { globalStyles } from "@/constants/styles";
import sizes from "@/constants/sizes";
import { colors } from "@/constants/colors";
import { OpacityButton, OpacityButtonProps } from "../Button";

export interface ApplyButtonProps {
  onPress?: OpacityButtonProps["onPress"];
}

const ApplyButton = ({ onPress }: ApplyButtonProps) => {
  return (
    <View style={styles.container}>
      <OpacityButton style={styles.buttonContainer} title="Show results" titleStyle={styles.title} onPress={onPress} />
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
    justifyContent: "center",
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
