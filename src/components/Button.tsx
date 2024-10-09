import React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
} from "react-native";
import { THEME_COLOR, BUTTON_DISABLED } from "../data/Colors";

interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title?: String;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  title = "Save",
  disabled = false,
}) => {
  return (
    <Pressable
      disabled={disabled}
      style={disabled ? styles.buttonDisabled : styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    backgroundColor: THEME_COLOR,
  },
  buttonDisabled: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    backgroundColor: BUTTON_DISABLED,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default Button;
