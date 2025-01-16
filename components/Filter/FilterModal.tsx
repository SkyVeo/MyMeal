import {
  Modal,
  ModalProps,
  Pressable,
  PressableProps,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

import Icon from "../Icon";
import { Tag } from "@/classes/Tag";
import { Meal } from "@/classes/Meal";
import { pluralize } from "@/utils/formatText";
import OpacityOverlay from "../OpacityOverlay";
import { SortOption } from "@/classes/SortOption";
import { globalStyles } from "@/constants/styles";
import { colors } from "@/constants/colors";
import FilterTagsSection from "./FIlterTagsSection";
import FilterSortSection from "./FilterSortSection";
import FilterOrderSection from "./FilterOrderSection";

// TODO apply onClose
// TODO use Props from FilterSection
export interface FilterModalProps extends ModalProps {
  meals?: Meal[];
  tags?: Tag[];
  selectedTags?: Tag[];
  onPressTag?: (tag: Tag) => void;
  onClearTags?: PressableProps["onPress"];
  sortOption?: SortOption;
  onPressSortOption?: (sortOption: SortOption) => void;
  isAscending?: boolean;
  onPressOrder?: (isAscending: boolean) => void;
  onClose?: () => void;
}

const FilterModal = ({
  visible,
  meals,
  tags = [],
  selectedTags,
  onPressTag,
  onClearTags,
  sortOption,
  onPressSortOption,
  isAscending = true,
  onPressOrder,
  onClose,
  ...props
}: FilterModalProps) => {
  return (
    <>
      {visible && <OpacityOverlay />}

      <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose} {...props}>
        <Pressable style={{ flex: 1 }} onPress={onClose} />
        <View style={styles.container}>
          <ScrollView>
            <Icon name="cancel" size={20} onPress={onClose} />

            <Pressable onPress={onClearTags}>
              <Text>Clear all filters</Text>
            </Pressable>

            <FilterTagsSection tags={tags} selectedTags={selectedTags} onPressTag={onPressTag} />
            <FilterSortSection sortOption={sortOption} onPressSortOption={onPressSortOption} />
            <FilterOrderSection isAscending={isAscending} onPressOrder={onPressOrder} />

            <Pressable onPress={onClose}>
              <Text>Show {pluralize("meal", meals ? meals.length : 0)}</Text>
            </Pressable>
          </ScrollView>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "90%",
    width: "100%",
    backgroundColor: colors.light.background,
  },
  orderTitle: {
    ...globalStyles.bold,
    fontSize: 16,
  },
  orderTitleContainer: {
    marginTop: 5,
    marginHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderColor: colors.light.tint,
  },
  orderContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingBottom: 15,
    paddingTop: 5,
    gap: 10,
    flexWrap: "wrap",
  },
});

export default FilterModal;
