import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../Components/Home/Home";
import Settings from "../Components/Home/Settings";
import DetailsNav from "./DetailsNav";

import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeNavigation() {
  const HomeTab = createBottomTabNavigator();
  return (
    <HomeTab.Navigator
      initialRouteName={"DetailsNav"}
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
          } else if (rn === "DetailsNav") {
            iconName = focused ? "book" : "book-outline";
          } else if (rn === "Settings") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <HomeTab.Screen name={"Home"} component={Home} />
      <HomeTab.Screen name={"DetailsNav"} component={DetailsNav} />
      <HomeTab.Screen name={"Settings"} component={Settings} />
    </HomeTab.Navigator>
  );

}