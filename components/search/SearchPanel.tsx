import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useInfiniteHits, useSearchBox } from "react-instantsearch-core";
import { TextVariant, Typography } from "../Typography";
import { SearchBox } from "./SearchBox";
import { LoadingSpinner } from "../LoadingSpinner";
import { SearchResults } from "./SearchResults";

export function SearchPanel() {
  const { hits, isLastPage, showMore, results, ...rest } = useInfiniteHits({
    escapeHTML: false,
  });

  const { query, refine } = useSearchBox();
  const [inputValue, setInputValue] = useState(query);
  const inputRef = useRef(null);

  function setQuery(newQuery) {
    setInputValue(newQuery);
    refine(newQuery);
  }

  // Track when the InstantSearch query changes to synchronize it with
  // the React state.
  // We bypass the state update if the input is focused to avoid concurrent
  // updates when typing.
  if (query !== inputValue && !inputRef.current?.isFocused()) {
    setInputValue(query);
  }

  const [isLoading, setIsLoading] = useState(true);

  /*
    useInfiniteHits does not provide an isLoading state, 
    so we need to use this very imperfect workaround until 
    we can switch to useInstantSearch: 
    https://github.com/algolia/react-instantsearch/issues/3435
    https://github.com/algolia/instantsearch/discussions/5358
  */
  useEffect(() => {
    setIsLoading(false);
  }, [results.page]);

  return (
    <>
      <SearchBox setQuery={setQuery} ref={inputRef} inputValue={inputValue} />
      <View style={styles.resultsContainer}>
        {query && hits.length > 0 ? (
          <Typography
            variant={TextVariant.Body}
            style={styles.searchResultsText}
          >
            Showing search results for{" "}
            <Typography variant={TextVariant.Body} style={styles.queryTerm}>
              {query}
            </Typography>
          </Typography>
        ) : null}
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <SearchResults
            setQuery={setQuery}
            query={query}
            hits={hits}
            isLastPage={isLastPage}
            showMore={showMore}
          />
        )}
      </View>
    </>
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
