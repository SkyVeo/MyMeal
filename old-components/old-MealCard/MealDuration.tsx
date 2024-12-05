import { View, Text, StyleSheet } from "react-native";

import Icon from "../../components/Icon";
import { globalStyles } from "@/constants/styles";

export interface MealDurationProps {
  duration: number;
}

const durationToString = (duration: number) => {
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
    alignItems: "center",
  },
  text: {
    ...globalStyles.medium,
    fontSize: 12,
  },
});

export default MealDuration;
