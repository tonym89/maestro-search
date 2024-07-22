import React from "react";
import { StyleSheet, View } from "react-native";
import { TextVariant, Typography } from "../components/Typography";
import { Button, ButtonVariant } from "../components";
import { router } from "expo-router";

export default function Index() {
  return (
    <View style={styles.welcomeContainer}>
      <View style={styles.textContainer}>
        <Typography variant={TextVariant.Title}>
          Welcome to BBC Maestro!
        </Typography>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Explore Courses"
          variant={ButtonVariant.Primary}
          onPress={() =>
            router.navigate({
              pathname: "/courses",
            })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginHorizontal: 60,
    marginBottom: 20,
  },
});
