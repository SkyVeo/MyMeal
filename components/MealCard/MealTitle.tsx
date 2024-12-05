import { StyleSheet } from "react-native";

import HighlightText from "../HighlightText";
import { globalStyles } from "@/constants/styles";

export interface MealTitleProps {
  title?: string;
  searchWords?: string[];
}

const MealTitle = ({ title, searchWords }: MealTitleProps) => {
  return <HighlightText textStyle={styles.title} text={title} searchWords={searchWords} ignoreTextSpaces />;
};

const styles = StyleSheet.create({
  title: {
    ...globalStyles.bold,
    fontSize: 16,
  },
});

export default MealTitle;
