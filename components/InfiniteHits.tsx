import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useInfiniteHits } from "react-instantsearch-core";

export function InfiniteHits({
  listEmptyComponent,
  hitComponent: Hit,
  ...props
}) {
  const { hits, isLastPage, showMore } = useInfiniteHits({
    ...props,
    escapeHTML: false,
  });

  return (
    <View style={styles.resultsContainer}>
      <FlatList
        data={hits}
        keyExtractor={(item) => item.slug}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        numColumns={2}
        onEndReached={() => {
          if (!isLastPage) {
            showMore();
          }
        }}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.outerCardContainer,
              index % 2 === 0 ? styles.marginRight : styles.marginLeft,
            ]}
          >
            <Hit hit={item} />
          </View>
        )}
        contentContainerStyle={{
          ...(hits.length > 0 ? {} : styles.contentContainerStyle),
        }}
        ListEmptyComponent={listEmptyComponent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  resultsContainer: {
    flex: 1,
  },
  contentContainerStyle: {
    flex: 1,
  },
  separator: {
    height: 16,
  },
  item: {
    flex: 1,
  },
  marginRight: {
    marginRight: 8,
  },
  marginLeft: {
    marginLeft: 8,
  },
  outerCardContainer: {
    flex: 1,
  },
});
