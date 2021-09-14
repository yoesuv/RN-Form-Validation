import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Splash({ navigation }) {
  setTimeout(() => {
    navigation.navigate('Login');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }]
    });
  }, 3000);
  return (
    <View style={styles.container}>
      <Text style={styles.textSplash}>Form Login & Register</Text>
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
  textSplash: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});

export default Splash;
