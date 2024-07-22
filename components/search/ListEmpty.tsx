import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { TextVariant, Typography } from "../Typography";

interface ListEmptyProps {
  searchTerm: string;
  querySuggestions: string[];
  setQuery: any;
}

const ListEmpty = ({
  searchTerm,
  querySuggestions,
  setQuery,
}: ListEmptyProps) => {
  return (
    <View style={styles.container}>
      <Typography variant={TextVariant.Body} center style={styles.noResultText}>
        No results found for search term{" "}
        <Typography variant={TextVariant.Body} style={styles.queryTerm} center>
          {searchTerm}
        </Typography>
      </Typography>
      {querySuggestions.length > 1 ? (
        <>
          <Typography variant={TextVariant.Body} center>
            Why not try some of these popular searches?
          </Typography>
          <View style={styles.suggestionsContainer}>
            {querySuggestions.map((el) => {
              return (
                <Button title={el} onPress={() => setQuery(el)} key={el} />
              );
            })}
          </View>
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  queryTerm: { color: "#FFFFFF", fontWeight: "bold" },
  noResultText: { marginVertical: 16 },
  suggestionsContainer: { marginVertical: 16 },
});

export { ListEmpty };
