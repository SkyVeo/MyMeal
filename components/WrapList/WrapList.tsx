import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import React from "react";

export interface WrapListProps<T> {
  style?: StyleProp<ViewStyle>;
  data?: T[];
  renderItem?: (item: T, index: number) => React.ReactNode;
}

const WrapList = <T,>({ style, data, renderItem }: WrapListProps<T>) => {
  return <View style={[styles.container, style]}>{data?.map((item, index) => renderItem?.(item, index))}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default WrapList;
