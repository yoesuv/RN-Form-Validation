import React, { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Alert } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import IconFA from 'react-native-vector-icons/FontAwesome5';

import SizedBox from '../components/SizedBox';
import Button from '../components/Button';
import { THEME_COLOR } from '../data/Colors';

export default function Register({ navigation }) {

  interface IRegisterInput {
    fullname: String;
    email: String;
    password: String;
    confirmpassword: String;
  }

  const [eyeOff, setEyeOff] = useState(true)
  const [eyeOffConfirm, setEyeOffConfirm] = useState(true)

  const schema = yup.object().shape({
    fullname: yup.string('enter a valid fullname').required('enter an fullname').matches(new RegExp(/^[a-zA-Z][a-zA-Z'., ]*$/), 'input is not correct'),
    email: yup.string('enter a valid email').email('enter a valid email').required('enter an email'),
    password: yup.string('enter a password').required('enter a password').min(5, 'password min 5 character'),
    confirmpassword: yup.string('enter a password').test('passwords-match', 'Passwords must match', function(value){
      return this.parent.password === value
    })
  });

  const { control, register, handleSubmit, formState, formState: { errors } } = useForm<IRegisterInput>({
    mode: 'onChange',
    resolver: yupResolver(schema)
  });

  const onSubmit = handleSubmit(({fullname, email, password}) => {
    Alert.alert('Data', `Fullname: ${fullname}\nEmail: ${email}\nPassword: ${password}`);
  });

  const { isDirty, isValid } = formState;

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Text style={styles.label}>Full Name</Text>
        <SizedBox height={5} />
        <Controller
          control={control}
          name="fullname"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <TextInput
                autoCapitalize="none"
                autoCompleteType="name"
                autoCorrect={false}
                returnKeyType="done"
                textContentType="name"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
              { errors.fullname &&
                <View>
                  <SizedBox height={2} />
                  <Text style={styles.labelError} >{errors?.fullname?.message}</Text>
                </View>
              }
            </View>
          )}
        />

        <SizedBox height={10} />
        <Text style={styles.label}>Email</Text>
        <SizedBox height={5} />
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <TextInput
                autoCapitalize="none"
                autoCompleteType="email"
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="done"
                textContentType="username"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
              { errors.email &&
                <View>
                  <SizedBox height={2} />
                  <Text style={styles.labelError} >{errors?.email?.message}</Text>
                </View>
              }
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
              <View style={styles.containerInput}>
                <TextInput
                  secureTextEntry={eyeOff}
                  autoCapitalize="none"
                  autoCompleteType="password"
                  autoCorrect={false}
                  returnKeyType="done"
                  textContentType="password"
                  style={[styles.inputPassword, { flex: 1 }]}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
                  <IconFA
                    name={eyeOff ? 'eye-slash' : 'eye'}
                    size={18}
                    color={'#000000'}
                    solid
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: 100 / 2,
                      textAlignVertical: 'center',
                      marginHorizontal: 15
                      // textAlign: 'center',
                    }}
                    onPress={() => setEyeOff(!eyeOff)}
                  />
              </View>
              { errors.password &&
                <View>
                  <SizedBox height={2} />
                  <Text style={styles.labelError} >{errors?.password?.message}</Text>
                </View>
              }
            </View>
          )}
        />

        <SizedBox height={10} />
        <Text style={styles.label}>Confirm Password</Text>
        <SizedBox height={5} />
        <Controller
          control={control}
          name="confirmpassword"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <View style={styles.containerInput}>
                <TextInput
                  secureTextEntry={eyeOffConfirm}
                  autoCapitalize="none"
                  autoCompleteType="password"
                  autoCorrect={false}
                  returnKeyType="done"
                  textContentType="password"
                  style={[styles.inputPassword, { flex: 1 }]}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
                  <IconFA
                    name={eyeOffConfirm ? 'eye-slash' : 'eye'}
                    size={18}
                    color={'#000000'}
                    solid
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: 100 / 2,
                      textAlignVertical: 'center',
                      marginHorizontal: 15
                    }}
                    onPress={() => setEyeOffConfirm(!eyeOffConfirm)}
                  />
              </View>
              { errors.confirmpassword &&
                <View>
                  <SizedBox height={2} />
                  <Text style={styles.labelError} >{errors?.confirmpassword?.message}</Text>
                </View>
              }
            </View>
          )}
        />

        <SizedBox height={20} />
        <Button title='Register' disabled={!isValid || !isDirty} onPress={onSubmit}/>
        <SizedBox height={20} />
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
  labelError: {
    fontSize: 12,
    color: 'red'
  },
  containerInput: {
    flexDirection: 'row',
    borderColor:'#EEEEEE',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
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
  inputPassword: {
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  button: {
    color: THEME_COLOR
  }
});

export default Register;
