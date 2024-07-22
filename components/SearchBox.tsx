import React, { useRef, useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSearchBox } from "react-instantsearch-core";

export function SearchBox(props) {
  const { query, refine } = useSearchBox(props);
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

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        style={styles.input}
        value={inputValue}
        onChangeText={setQuery}
        clearButtonMode="while-editing"
        autoCapitalize="none"
        autoCorrect={false}
        spellCheck={false}
        autoComplete="off"
        placeholder="Search by course title or topic"
      />
      <View style={styles.iconContainer}>
        <Ionicons size={20} name="search-outline" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  iconContainer: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "white",
  },
  input: {
    paddingLeft: 10,
    paddingVertical: 8,
    backgroundColor: "white",
    fontSize: 16,
    lineHeight: 20,
    flex: 1,
  },
});
