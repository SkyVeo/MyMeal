import React, { useCallback } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import TagCard from "./TagCard";
import { Tag } from "@/classes/Tag";

export interface TagListProps {
  tags?: Tag[];
  selectedTags?: Tag[];
  onPressTag?: (tag: Tag) => void;
}

const GAP = 10;

const TagList = ({ tags, selectedTags, onPressTag }: TagListProps) => {
  const renderTag = useCallback(
    ({ item }: { item: Tag }) => <TagCard tag={item} selected={selectedTags?.includes(item)} onPress={onPressTag} />,
    [selectedTags]
  );

  return (
    <View>
      <FlatList data={tags} renderItem={renderTag} contentContainerStyle={styles.flatListContainer} horizontal />
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    gap: GAP,
    marginVertical: GAP,
    paddingHorizontal: GAP,
  },
});

export default TagList;
