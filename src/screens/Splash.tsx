import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Splash({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
      <Button title='Login' onPress={() => {
        navigation.navigate('Login');
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

export default Splash;
