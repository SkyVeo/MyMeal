import { StyleSheet, Text } from "react-native";

import Scale from "../Animation/Scale";
import { colors } from "@/constants/colors";
import { globalStyles } from "@/constants/styles";
import { Tag } from "@/classes/Tag";

export interface TagCardProps {
  tag: Tag;
  selected?: boolean;
  onPress?: (tag: Tag) => void;
}

const TagCard = ({ tag, selected = false, onPress }: TagCardProps) => {
  const backgroundColor = selected ? colors.light.backgroundTertiary : colors.light.highlight;

  return (
    <Scale
      style={{ ...styles.container, backgroundColor: backgroundColor }}
      onPress={() => onPress?.(tag)}
      onPressTiming="before"
      hitSlop={10}
    >
      <Text style={styles.text}>{tag.toString()}</Text>
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

export default TagCard;
