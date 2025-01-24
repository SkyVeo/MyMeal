import { StyleSheet } from "react-native";
import React from "react";

import ExpandableMenu, { ExpandableMenuProps } from "../ExpandableMenu";
import { colors } from "@/constants/colors";
import { globalStyles } from "@/constants/styles";
import sizes from "@/constants/sizes";
import WrapList, { WrapListProps } from "../WrapList";

export interface FilterSectionProps<T> extends WrapListProps<T>, ExpandableMenuProps {}

const FilterSection = <T,>({
  style,
  data,
  renderItem,
  titleContainerStyle,
  titleStyle,
  ...props
}: FilterSectionProps<T>) => {
  return (
    <ExpandableMenu
      titleContainerStyle={[styles.titleContainer, titleContainerStyle]}
      titleStyle={[styles.title, titleStyle]}
      {...props}
    >
      <WrapList style={[styles.wrapList, style]} data={data} renderItem={renderItem} />
    </ExpandableMenu>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 5,
    marginHorizontal: sizes.modalPadding,
    paddingTop: 15,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderColor: colors.light.tint,
  },
  title: {
    ...globalStyles.bold,
    fontSize: 16,
  },
  wrapList: {
    paddingHorizontal: sizes.modalPadding,
    paddingBottom: 15,
    paddingTop: 5,
    gap: 10,
  },
});

export default FilterSection;
