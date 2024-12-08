import { StyleSheet, View } from "react-native";

import { PropsWithChildren } from "react";

export interface HeaderProps extends PropsWithChildren {}

const GAP = 10;

const Header = ({ children }: HeaderProps) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    padding: GAP,
    gap: GAP,
  },
});

export default Header;
