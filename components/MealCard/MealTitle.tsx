import { StyleSheet } from "react-native";

import HighlightText, { HighlightTextProps } from "../HighlightText";
import { globalStyles } from "@/constants/styles";
import { removeAccents } from "@/utils/formatText";

export interface MealTitleProps {
  title?: string;
  searchWords?: HighlightTextProps["searchWords"];
}

const MealTitle = ({ title, searchWords }: MealTitleProps) => {
  return (
    <HighlightText
      textStyle={styles.title}
      textToHighlight={title}
      searchWords={searchWords}
      sanitize={removeAccents}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    ...globalStyles.bold,
    fontSize: 16,
  },
});

export default MealTitle;
