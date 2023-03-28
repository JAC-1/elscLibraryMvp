import React, { useEffect } from "react";
import { Dimensions } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Screens
import HomeScreen from "../Components/Home/Home";
import Details from "../Components/Home/Details";
import Settings from "../Components/Home/Settings";
import TitleScreen from "../Components/Login/TitleScreen";
import LoginScreen from "../Components/Login/LoginScreen";
import RegisterScreen from "../Components/Login/RegisterScreen";
import IntroPopupScreen from "../Components/Login/IntroPopupScreen";
import History from "../Components/Home/History";
import BooksOut from "../Components/Home/BooksOut";
import QuoteScreen from "../Components/Login/QuoteScreen";

// Screen names
const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeNavigation({ navigation }) {
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
      <Tab.Screen name={detailsName} component={Details} />
      <Tab.Screen name={settingsName} component={Settings} />
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
        <Stack.Screen name="HomeNavigation" component={HomeNavigation} />
        <Stack.Screen
          name="BooksHistoryScreen"
          component={History}
        />
        <Stack.Screen name="BooksOutScreen" component={BooksOut} />
        <Stack.Screen name="QuoteScreen" component={QuoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
