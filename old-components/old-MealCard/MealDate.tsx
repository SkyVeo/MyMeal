import { globalStyles } from "@/constants/styles";
import { View, Text, StyleSheet } from "react-native";

export interface MealDateProps {
  creationDate: Date;
}

const getDay = (date: Date) => {
  const day = date.toLocaleDateString(undefined, { day: "numeric" });
  return day.length === 1 ? `0${day}` : day;
};

const getMonth = (date: Date) => {
  return date.toLocaleDateString(undefined, { month: "short" });
};

const MealDate = ({ creationDate }: MealDateProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.month}>{getMonth(creationDate)}</Text>
      <Text style={styles.day}>{getDay(creationDate)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  month: {
    ...globalStyles.medium,
    fontSize: 12,
  },
  day: {
    ...globalStyles.medium,
    fontSize: 20,
  },
});

export default MealDate;
