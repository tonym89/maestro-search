import React from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

export enum ButtonVariant {
  Primary,
  Secondary,
}

interface ButtonProps extends PressableProps {
  variant: ButtonVariant;
  title: string;
}

const Button = ({
  variant = ButtonVariant.Primary,
  title,
  onPressIn = () => {},
  onPressOut = () => {},
  ...rest
}: ButtonProps) => {
  const [isPressed, setIsPressed] = React.useState(false);

  const handlePressIn = (e) => {
    setIsPressed(true);
    onPressIn(e);
  };

  const handlePressOut = (e) => {
    setIsPressed(false);
    onPressOut(e);
  };

  return (
    <Pressable
      style={[
        styles.baseContainer,
        variant === ButtonVariant.Primary
          ? styles.primaryContainer
          : styles.secondaryContainer,
        isPressed && variant === ButtonVariant.Primary && { opacity: 0.8 },
        isPressed &&
          variant === ButtonVariant.Secondary && { backgroundColor: "#F2F2F2" },
      ]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      {...rest}
    >
      <Text
        style={[
          styles.baseText,
          variant === ButtonVariant.Primary
            ? styles.primaryText
            : styles.secondaryText,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  primaryText: {
    color: "#FFFFFF",
  },
  secondaryText: {
    color: "#F2F2F2",
  },
  baseContainer: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 2,
  },
  primaryContainer: { backgroundColor: "#E45F00" },
  secondaryContainer: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#F2F2F2",
  },
});

export { Button };
