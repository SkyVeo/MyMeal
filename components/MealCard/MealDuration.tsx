import { View, Text, StyleSheet } from "react-native";

import Icon from "../Icon";
import { globalStyles } from "@/constants/styles";

export interface MealDurationProps {
  duration?: number;
}

const durationToString = (duration?: number) => {
  if (duration === undefined) {
    return "? min";
  }
  return duration % 60 === 0 ? `${duration / 60} h` : `${duration} min`;
};

const MealDuration = ({ duration }: MealDurationProps) => {
  return (
    <View style={styles.container}>
      <Icon name="clock" size={20} />
      <Text style={styles.text}>{durationToString(duration)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  text: {
    ...globalStyles.medium,
    fontSize: 14,
  },
});

export default MealDuration;
