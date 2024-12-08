import { StyleSheet, Text } from "react-native";

import Scale from "../Animation/Scale";
import { colors } from "@/constants/colors";
import { globalStyles } from "@/constants/styles";

export interface TagProps {
  title?: string;
  emoji?: string;
  selected?: boolean;
  onPress?: () => void;
}

const Tag = ({ title, emoji, selected = false, onPress }: TagProps) => {
  const backgroundColor = selected ? colors.light.backgroundTertiary : colors.light.highlight;

  return (
    <Scale
      style={{ ...styles.container, backgroundColor: backgroundColor }}
      onPress={onPress}
      onPressTiming="before"
      hitSlop={10}
    >
      <Text style={styles.text}>
        {emoji}
        {emoji && " "}
        {title}
      </Text>
    </Scale>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 25,
  },
  text: {
    ...globalStyles.medium,
    fontSize: 14,
    color: colors.light.background,
  },
});

export default Tag;
