import React from "react";
import { StyleSheet, View } from "react-native";
import { TextVariant, Typography } from "../components/Typography";

export default function Courses() {
  return (
    <View style={styles.coursesContainer}>
      <Typography variant={TextVariant.Body} center>
        Work in progress... try clicking search though!
      </Typography>
    </View>
  );
}

const styles = StyleSheet.create({
  coursesContainer: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
});
