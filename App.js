import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { InfiniteHits, SearchBox, Hit, ListEmpty } from "./components";
import algoliasearch from "algoliasearch/lite";
import { Configure, InstantSearch } from "react-instantsearch-core";

// TODO: ADD Application ID + Search Key to .env file
const searchClient = algoliasearch(
  process.env.EXPO_PUBLIC_ALGOLIA_APP_ID,
  process.env.EXPO_PUBLIC_ALGOLIA_SEARCH_KEY
);

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <InstantSearch searchClient={searchClient} indexName="courses">
          <Configure highlightPreTag="<mark>" highlightPostTag="</mark>" />
          <SearchBox />
          <InfiniteHits
            hitComponent={Hit}
            listEmptyComponent={
              <ListEmpty text={"There are no results for this search"} />
            }
          />
        </InstantSearch>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
