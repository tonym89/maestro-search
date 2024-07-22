import React from "react";
import { StyleSheet, View } from "react-native";
import algoliasearch from "algoliasearch/lite";
import { Configure, InstantSearch } from "react-instantsearch-core";
import { SearchPanel } from "../components";

const searchClient = algoliasearch(
  process.env.EXPO_PUBLIC_ALGOLIA_APP_ID,
  process.env.EXPO_PUBLIC_ALGOLIA_SEARCH_KEY
);

export default function Search() {
  return (
    <View style={styles.searchContainer}>
      <InstantSearch searchClient={searchClient} indexName="courses">
        <Configure highlightPreTag="<mark>" highlightPostTag="</mark>" />
        <SearchPanel />
      </InstantSearch>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 8,
    backgroundColor: "black",
  },
});
