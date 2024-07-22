import { StyleSheet, SafeAreaView, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" hidden={false} />
      <SafeAreaView style={styles.safe}>
        <Stack
          screenOptions={{
            headerStyle: styles.headerStyle,
            headerTintColor: "#fff",
            headerTitleStyle: styles.headerTitleStyle,
            headerRight: () => (
              <Pressable
                onPress={() =>
                  router.navigate({
                    pathname: "/search",
                  })
                }
              >
                <Ionicons size={24} name="search-outline" color={"white"} />
              </Pressable>
            ),
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              headerTitle: "BBC Maestro",
            }}
          />
          <Stack.Screen
            name="courses"
            options={{
              headerTitle: "Courses",
              headerBackVisible: false,
            }}
          />
          <Stack.Screen
            name="search"
            options={{
              headerTitle: "Search",
            }}
          />
        </Stack>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "black" },
  headerStyle: { backgroundColor: "black" },
  headerTitleStyle: { fontWeight: "bold" },
});
