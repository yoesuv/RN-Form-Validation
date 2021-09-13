import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Alert } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import SizedBox from '../components/SizedBox';
import Button from '../components/Button';
import { THEME_COLOR } from '../data/Colors';

export default function Login({ navigation }) {

  interface ILoginInput {
    email: String;
    password: String;
  }

  const { control, handleSubmit } = useForm<ILoginInput>();

  const onSubmit = handleSubmit(({email, password}) => {
    Alert.alert('Data', `Email: ${email}\nPassword: ${password}`);
  });

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Text style={styles.label}>Email</Text>
        <SizedBox height={5} />
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              autoCapitalize="none"
              autoCompleteType="email"
              autoCorrect={false}
              keyboardType="email-address"
              returnKeyType="next"
              textContentType="username"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <SizedBox height={10} />
        <Text style={styles.label}>Password</Text>
        <SizedBox height={5} />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              autoCapitalize="none"
              autoCompleteType="password"
              autoCorrect={false}
              returnKeyType="done"
              secureTextEntry
              textContentType="password"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <SizedBox height={20} />
        <Button title='Login' onPress={onSubmit}/>
        <SizedBox height={20} />
        <Button title='Register' onPress={() => {
          console.log('go to Register');
          navigation.navigate('Register');
        }}/>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 16
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  input: {
    borderColor:'#EEEEEE',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  button: {
    color: THEME_COLOR
  }
});

export default Login;
