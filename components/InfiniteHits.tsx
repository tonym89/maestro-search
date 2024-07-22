import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import { useInfiniteHits } from "react-instantsearch-core";
import { TextVariant, Typography } from "./Typography";

export function InfiniteHits({
  listEmptyComponent,
  hitComponent: Hit,
  ...props
}) {
  const { hits, isLastPage, showMore, results, ...rest } = useInfiniteHits({
    ...props,
    escapeHTML: false,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [results.page]);

  const query = results?.query;

  return (
    <View style={styles.resultsContainer}>
      {query && hits.length > 0 ? (
        <Typography variant={TextVariant.Body} style={styles.searchResultsText}>
          Showing search results for{" "}
          <Typography variant={TextVariant.Body} style={styles.queryTerm}>
            {query}
          </Typography>
        </Typography>
      ) : null}
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#FFFFFF" />
        </View>
      ) : (
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
      )}
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
  searchResultsText: {
    marginBottom: 12,
  },
  queryTerm: { color: "#FFFFFF", fontWeight: "bold" },
  loadingContainer: { flex: 1, justifyContent: "center" },
});
