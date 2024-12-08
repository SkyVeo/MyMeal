import { PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";

import { globalStyles } from "@/constants/styles";

export interface TitleProps extends PropsWithChildren {}

const Title = ({ children }: PropsWithChildren) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    ...globalStyles.bold,
    fontSize: 25,
  },
});

export default Title;
