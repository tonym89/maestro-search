import React from "react";
import { Text, TextProps, StyleSheet } from "react-native";

export enum TextVariant {
  Title,
  Subtitle,
  Body,
}

interface TypographyProps extends TextProps {
  variant: TextVariant;
  center?: boolean;
  shrink?: boolean;
}

const Typography = ({
  variant,
  style,
  center,
  shrink,
  children,
  ...rest
}: TypographyProps) => {
  const getStylesForVariant = (variant: TextVariant) => {
    switch (variant) {
      case TextVariant.Title:
        return styles.title;
      case TextVariant.Subtitle:
        return styles.subtitle;
      case TextVariant.Body:
        return styles.body;
    }
  };

  return (
    <Text
      style={[getStylesForVariant(variant), center && styles.center, style]}
      {...rest}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#bfbfbf",
    marginBottom: 8,
  },
  body: {
    fontSize: 16,
    color: "#bfbfbf",
  },
  center: {
    textAlign: "center",
  },
});

export { Typography };
