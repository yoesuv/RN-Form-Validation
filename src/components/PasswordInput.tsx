import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

interface PasswordInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onBlur: () => void;
  placeholder?: string;
  textContentType?: "password" | "newPassword";
}

export default function PasswordInput({
  value,
  onChangeText,
  onBlur,
  placeholder,
  textContentType = "password",
}: PasswordInputProps) {
  const [eyeOff, setEyeOff] = useState(true);

  return (
    <View style={styles.containerInput}>
      <TextInput
        secureTextEntry={eyeOff}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="done"
        textContentType={textContentType}
        placeholder={placeholder}
        style={styles.inputPassword}
        onBlur={onBlur}
        onChangeText={onChangeText}
        value={value}
      />
      <FontAwesome5
        name={eyeOff ? "eye-slash" : "eye"}
        size={18}
        color={"#000000"}
        solid
        style={styles.icon}
        onPress={() => setEyeOff(!eyeOff)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerInput: {
    flexDirection: "row",
    borderColor: "#EEEEEE",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,
  },
  inputPassword: {
    flex: 1,
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  icon: {
    backgroundColor: "#FFFFFF",
    borderRadius: 100 / 2,
    textAlignVertical: "center",
    marginHorizontal: 15,
  },
});
