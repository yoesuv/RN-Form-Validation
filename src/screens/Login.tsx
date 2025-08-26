import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Alert,
  Platform,
} from "react-native";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import SizedBox from "../components/SizedBox";
import Button from "../components/Button";
import PasswordInput from "../components/PasswordInput";
import { THEME_COLOR } from "../data/Colors";
import { RootStackParamList } from "../screens/RootStackParams";
import { loginSchema } from "../utils/validation";

type loginScreenProp = StackNavigationProp<RootStackParamList, "Login">;

export default function Login() {
  const navigation = useNavigation<loginScreenProp>();

  interface ILoginInput {
    email: string;
    password: string;
  }

  const {
    control,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm<ILoginInput>({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = handleSubmit(({ email, password }) => {
    Alert.alert("Data", `Email: ${email}\nPassword: ${password}`);
  });

  const { isDirty, isValid } = formState;

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Text style={styles.label}>Email</Text>
        <SizedBox height={5} />
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="done"
                textContentType="username"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value ? value.toString() : ""}
              />
              {errors.email && (
                <View>
                  <SizedBox height={2} />
                  <Text style={styles.labelError}>
                    {errors?.email?.message}
                  </Text>
                </View>
              )}
            </View>
          )}
        />

        <SizedBox height={10} />
        <Text style={styles.label}>Password</Text>
        <SizedBox height={5} />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <PasswordInput
                value={value ? value.toString() : ""}
                onChangeText={onChange}
                onBlur={onBlur}
                textContentType="password"
              />
              {errors.password && (
                <View>
                  <SizedBox height={2} />
                  <Text style={styles.labelError}>
                    {errors?.password?.message}
                  </Text>
                </View>
              )}
            </View>
          )}
        />

        <SizedBox height={20} />
        <Button
          title="Login"
          disabled={!isValid || !isDirty}
          onPress={onSubmit}
        />
        <SizedBox height={20} />
        <Button
          title="Register"
          disabled={false}
          onPress={() => {
            navigation.navigate("Register");
          }}
        />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  labelError: {
    fontSize: 12,
    color: "red",
  },
  containerInput: {
    flexDirection: "row",
    borderColor: "#EEEEEE",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,
  },
  input: {
    borderColor: "#EEEEEE",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  inputPassword: {
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  button: {
    color: THEME_COLOR,
  },
});
