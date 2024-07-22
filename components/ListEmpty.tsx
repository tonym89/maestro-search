import React from "react";
import { View, Text } from "react-native";

interface ListEmptyProps {
  text: string;
}

const ListEmpty = ({ text }: ListEmptyProps) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white" }}>{text}</Text>
    </View>
  );
};

export { ListEmpty };
