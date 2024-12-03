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
    includeFontPadding: false,
    fontSize: 12,
    fontFamily: "Poppins-Medium",
  },
  day: {
    includeFontPadding: false,
    fontSize: 20,
    fontFamily: "Poppins-Medium",
  },
});

export default MealDate;
