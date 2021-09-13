import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput } from 'react-native';
import { useForm, SubmitHandler } from 'react-hook-form';
import SizedBox from '../components/SizedBox';
import Button from '../components/Button';
import { THEME_COLOR } from '../data/Colors';

export default function Login({ navigation }) {

  interface ILoginInput {
    email: String;
    password: String;
  }

  const { register, handleSubmit } = useForm<ILoginInput>();
  const onSubmit: SubmitHandler<ILoginInput> = data => console.log(data);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Text style={styles.label}>Email</Text>
        <SizedBox height={5} />
        <TextInput
          autoCapitalize="none"
          autoCompleteType="email"
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="next"
          textContentType="username"
          style={styles.input}
        />

        <SizedBox height={10} />
        <Text style={styles.label}>Password</Text>
        <SizedBox height={5} />
        <TextInput
          autoCapitalize="none"
          autoCompleteType="password"
          autoCorrect={false}
          returnKeyType="done"
          secureTextEntry
          textContentType="password"
          style={styles.input}
        />

        <SizedBox height={20} />
        <Button title='Login' onPress={() => {
          console.log('Login');
        }}/>
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
