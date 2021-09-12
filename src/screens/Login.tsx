import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button title='Register' onPress={() => {
        console.log('go to Register');
        navigation.navigate('Register');
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
