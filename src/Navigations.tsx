import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";

import Splash from "./screens/Splash";
import Login from ".//screens/Login";
import Register from ".//screens/Register";
import { THEME_COLOR, HEADER_TINT_COLOR } from "./data/Colors";

const Stack = createNativeStackNavigator();
const baseOptions: NativeStackNavigationOptions = {
  title: "Login",
  headerStyle: {
    backgroundColor: THEME_COLOR,
  },
  headerTintColor: HEADER_TINT_COLOR,
  headerTitleStyle: {
    fontWeight: "bold",
  },
  statusBarStyle: "dark",
  headerShown: true,
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ ...baseOptions, title: "Login" }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ ...baseOptions, title: "Register" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
