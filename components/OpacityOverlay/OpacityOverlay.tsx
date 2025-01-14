import React from "react";
import { StyleSheet, View } from "react-native";

export interface OpacityOverlayProps {
  opacity?: number;
}

const OpacityOverlay = ({ opacity = 0.5 }: OpacityOverlayProps) => {
  return <View style={{ ...styles.container, backgroundColor: `rgba(0, 0, 0, ${opacity})` }} />;
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
});

export default OpacityOverlay;
