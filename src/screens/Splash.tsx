import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../screens/RootStackParams';

type splashScreenProp = StackNavigationProp<RootStackParamList, 'Splash'>;

export default function Splash() {
  const navigation = useNavigation<splashScreenProp>();
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
