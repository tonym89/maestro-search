import { StyleSheet, Image, View } from "react-native";
import { Highlight } from "./Highlight";
import { TextVariant } from "../Typography";
import { LinearGradient } from "expo-linear-gradient";

const LINEAR_GRADIENT_COLORS = [
  "transparent",
  "transparent",
  "transparent",
  "transparent",
  "transparent",
  "rgba(25, 25, 25,0.1)",
  "rgba(25, 25, 25,0.5)",
  "rgba(25, 25, 25,0.7)",
  "rgba(25, 25, 25,0.9)",
  "rgba(25, 25, 25,1)",
];

function Hit({ hit }) {
  const { image } = hit;
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: image }} style={styles.image} />
      <LinearGradient
        colors={LINEAR_GRADIENT_COLORS}
        style={styles.linearGradientBackground}
      />
      <View style={styles.contentContainer}>
        <Highlight attribute="title" hit={hit} variant={TextVariant.Title} />
        <Highlight
          attribute="maestro.full_name"
          hit={hit}
          variant={TextVariant.Subtitle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    position: "relative",
  },
  contentContainer: {
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 4,
  },
  linearGradientBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  bottomMargin: {
    marginBottom: 4,
  },
  image: { width: "100%", height: 240 },
});

export { Hit };