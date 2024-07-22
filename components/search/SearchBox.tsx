import React, { ForwardedRef } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface SearchBoxProps {
  inputValue: string;
  setQuery: (query: string) => void;
}

export const SearchBox = React.forwardRef(
  ({ inputValue, setQuery }: SearchBoxProps, ref: ForwardedRef<TextInput>) => {
    return (
      <View style={styles.container}>
        <TextInput
          ref={ref}
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
);
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
