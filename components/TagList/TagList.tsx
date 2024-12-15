import { FlatList, StyleSheet, View } from "react-native";

import TagCard from "./TagCard";
import { Tag } from "@/classes/Tag";
import { useSortedTags, useTagSelection } from "./TagList.hooks";

export interface TagListProps {
  tags?: Tag[];
  selectedTags?: string[];
  onChangeSelectedTags?: (tags: string[]) => void;
}

const GAP = 10;

const TagList = ({ tags, selectedTags, onChangeSelectedTags }: TagListProps) => {
  const { sortedTags } = useSortedTags(tags);
  const { isTagSelected, handleTagPress } = useTagSelection(selectedTags, onChangeSelectedTags);

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
