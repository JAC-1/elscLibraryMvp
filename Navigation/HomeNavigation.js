import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../Components/Home/Home";
import Details from "../Components/Home/Details";
import History from "../Components/Home/History";
import BooksOut from "../Components/Home/BooksOut";
import Settings from "../Components/Home/Settings";

import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeNavigation() {
  return (
    <Tab.Navigator
      initialRouteName={"Home"}
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

          if (rn === "Home") {
            iconName = focused ? "alarm" : "alarm-outline";
          } else if (rn === "Details") {
            iconName = focused ? "book" : "book-outline";
          } else if (rn === "Settings") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name={"Home"} component={Home} />
      <Tab.Screen name={"Details"} component={Details} />
      <Tab.Screen name={"Settings"} component={Settings} />
    </Tab.Navigator>
  );
}