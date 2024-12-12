import { FlatList, StyleSheet, View } from "react-native";
import { useState } from "react";

import { tags } from "@/constants/tags";
import TagCard from "./TagCard";
import { Tag } from "@/classes/tag";
import { useSortedTags } from "./TagList.hooks";

export interface TagListProps {
  tags?: Tag[];
}

const GAP = 10;

const TagList = ({}: TagListProps) => {
  const { sortedTags } = useSortedTags(tags);
  const [selectedTagsIndex, setSelectedTagsIndex] = useState<number[]>([]);

  const handleTagPress = (tag: Tag) => {
    const index = sortedTags.indexOf(tag);

    if (selectedTagsIndex.includes(index)) {
      setSelectedTagsIndex(selectedTagsIndex.filter((i) => i !== index));
    } else {
      setSelectedTagsIndex([...selectedTagsIndex, index]);
    }
  };

  const isTagSelected = (tag: Tag) => {
    return selectedTagsIndex.includes(sortedTags.indexOf(tag));
  };

  const renderTag = ({ item }: { item: Tag }) => (
    <TagCard tag={item} selected={isTagSelected(item)} onPress={handleTagPress} />
  );

  return (
    <View>
      <FlatList data={sortedTags} renderItem={renderTag} contentContainerStyle={styles.flatListContainer} horizontal />
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
