import { StyleSheet } from "react-native";
import React from "react";

import ExpandableMenu, { ExpandableMenuProps } from "../ExpandableMenu";
import { colors } from "@/constants/colors";
import { globalStyles } from "@/constants/styles";
import sizes from "@/constants/sizes";

export interface FilterSectionProps extends ExpandableMenuProps {}

const FilterSection = ({
  titleContainerStyle,
  titleStyle,
  expandableContainerStyle,
  children,
  ...props
}: FilterSectionProps) => {
  return (
    <ExpandableMenu
      titleContainerStyle={[styles.orderTitleContainer, titleContainerStyle]}
      titleStyle={[styles.orderTitle, titleStyle]}
      expandableContainerStyle={[styles.orderContainer, expandableContainerStyle]}
      {...props}
    >
      {children}
    </ExpandableMenu>
  );
};

const styles = StyleSheet.create({
  orderTitleContainer: {
    marginTop: 5,
    marginHorizontal: sizes.modalPadding,
    paddingTop: 15,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderColor: colors.light.tint,
  },
  orderTitle: {
    ...globalStyles.bold,
    fontSize: 16,
  },
  orderContainer: {
    flexDirection: "row",
    paddingHorizontal: sizes.modalPadding,
    paddingBottom: 15,
    paddingTop: 5,
    gap: 10,
    flexWrap: "wrap",
  },
});

export default FilterSection;
