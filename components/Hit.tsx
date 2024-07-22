import { Text, StyleSheet, Image, View } from "react-native";
import { Highlight } from "./Highlight";

function Hit({ hit }) {
  const {
    title,
    maestro: { full_name },
    slug,
    image,
  } = hit;
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: image }} style={{ width: "100%", height: 200 }} />
      {/* <Highlight hit={hit} attribute="title" /> */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{full_name}</Text>
        <Text style={styles.subtitle}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    position: "relative",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    flexShrink: 1,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#bfbfbf",
    flexShrink: 1,
    textAlign: "center",
  },
  contentContainer: {
    position: "absolute",
    bottom: 10,
    justifyContent: "center",
    width: "100%",
  },
});

export { Hit };
