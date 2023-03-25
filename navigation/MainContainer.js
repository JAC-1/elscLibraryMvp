import React, { useEffect } from "react";
import { Dimensions } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Screens
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import TitleScreen from "./screens/TitleScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import IntroPopupScreen from "./screens/IntroPopupScreen";
import BooksHistoryScreen from "./screens/BooksHistoryScreen";
import BooksOutScreen from "./screens/BooksOutScreen";
import QuoteScreen from "./screens/QuoteScreen";

// Screen names
const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabMetaBar({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "slateblue",
        tabBarInactiveTintColor: "grey",
        tabBarShowLabel: false,
        tabBarLabelStyle: {
          paddingBottom: 10,
          fontSize: 10,
        },
        tabBarStyle: [
          {
            display: "flex",
            height: Dimensions.get("window").height / 8,
            borderTopWidth: 3,
            borderTopColor: "black",
          },
          null,
        ],
        headerShown: false,

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          size = Dimensions.get("window").width / 10;

          if (rn === homeName) {
            iconName = focused ? "alarm" : "alarm-outline";
          } else if (rn === detailsName) {
            iconName = focused ? "book" : "book-outline";
          } else if (rn === settingsName) {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={detailsName} component={DetailsScreen} />
      <Tab.Screen name={settingsName} component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerMode: "none" }}>
        <Stack.Screen name="Title" component={TitleScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="IntroPopup" component={IntroPopupScreen} />
        <Stack.Screen name="TabMetaBar" component={TabMetaBar} />
        <Stack.Screen
          name="BooksHistoryScreen"
          component={BooksHistoryScreen}
        />
        <Stack.Screen name="BooksOutScreen" component={BooksOutScreen} />
        <Stack.Screen name="QuoteScreen" component={QuoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
