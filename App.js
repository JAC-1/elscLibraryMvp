import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeNavigation from "./Navigation/HomeNavigation";
import LoginNavigation from "./Navigation/LoginNavigation";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginNav" component={LoginNavigation} />
        <Stack.Screen name="HomeNav" component={HomeNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

