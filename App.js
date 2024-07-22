import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View, Text } from "react-native";
import { InfiniteHits, SearchBox, Highlight } from "./components";
import algoliasearch from "algoliasearch/lite";
import { Configure, InstantSearch } from "react-instantsearch-core";

// TODO: ADD Application ID + Search Key to .env file
const searchClient = algoliasearch(
  process.env.EXPO_PUBLIC_ALGOLIA_APP_ID,
  process.env.EXPO_PUBLIC_ALGOLIA_SEARCH_KEY
);

function Hit({ hit }) {
  const {
    title,
    maestro: { full_name },
    slug,
    image,
  } = hit;
  return (
    <Text>
      <Highlight hit={hit} attribute="title" />
    </Text>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <InstantSearch searchClient={searchClient} indexName="courses">
          <Configure highlightPreTag="<mark>" highlightPostTag="</mark>" />
          <SearchBox />
          <InfiniteHits hitComponent={Hit} />
        </InstantSearch>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#252b33",
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    flexDirection: "column",
  },
});
