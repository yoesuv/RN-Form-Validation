import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import { THEME_COLOR, HEADER_TINT_COLOR } from './src/data/Colors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: THEME_COLOR
          },
          headerTintColor: HEADER_TINT_COLOR,
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }} />
        <Stack.Screen name="Register" component={Register} options={{
          title: 'Register',
          headerStyle: {
            backgroundColor: THEME_COLOR
          },
          headerTintColor: HEADER_TINT_COLOR,
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
