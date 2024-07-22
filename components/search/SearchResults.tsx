import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Hit } from "./Hit";
import { ListEmpty } from "./ListEmpty";

// Ideally these should be coming from Algolia's query suggestions API
const QUERY_SUGGESTIONS = [
  "Cooking for beginners",
  "Julia Donaldson",
  "How to start a business",
  "Sleep better",
  "Peter Jones",
  "The art of storytelling",
  "Acting",
  "Buddhist Meditation",
];

export function SearchResults({ query, setQuery, hits, isLastPage, showMore }) {
  return (
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
      ListEmptyComponent={
        <ListEmpty
          searchTerm={query}
          querySuggestions={QUERY_SUGGESTIONS}
          setQuery={setQuery}
        />
      }
    />
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
  searchResultsText: {
    marginBottom: 12,
  },
  queryTerm: { color: "#FFFFFF", fontWeight: "bold" },
});
