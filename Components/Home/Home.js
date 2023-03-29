import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  Dimensions,
  Image,
  ScrollView,
  SafeAreaView,
  Platform,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createStackNavigator();

export default function SettingsScreen({ navigation }) {
  return (
    <ScrollView // the vertical allcontainer
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.divForCornerLogo}>
        <Text style={styles.cornerLogo}>ELSCLIB</Text>
      </View>
      <View style={styles.horizContainer}>
        <ScrollView // the horizontal div
          horizontal={true}
          contentContainerStyle={styles.horizInnerContainer}
          showsHorizontalScrollIndicator={false}
        >
          <Image
            style={styles.bookWireframe}
            source={require("../../assets/images/bookWireframe.png")}
          />
          <Image
            style={styles.bookWireframe}
            source={require("../../assets/images/bookWireframe2.png")}
          />
          <Image
            style={styles.bookWireframe}
            source={require("../../assets/images/bookWireframe2.png")}
          />
        </ScrollView>
      </View>
      <View style={styles.status}>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.greenButton}></Pressable>
        </View>
        <View>
          <Text style={styles.text}>DUE 01/24</Text>
        </View>
      </View>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    color: "green",
    backgroundColor: "white",
  },
  divForCornerLogo: {
    position: "relative",
    padding: "3%",
    backgroundColor: "white",
    marginLeft: "auto",
  },
  cornerLogo: {
    fontSize: 25,
    fontWeight: "900",
    color: "black",
  },
  horizContainer: {
    width: "100%",
    height: 300,
  },
  horizInnerContainer: {
    flexDirection: "row",
    paddingHorizontal: 30,
  },
  bookWireframe: {
    width: 200,
    height: 300,
    marginHorizontal: 15,
  },
  status: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",

  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
  },
  greenButton: {
    backgroundColor: "lightgreen",
    width: "80%",
    paddingVertical: 30,
    borderWidth: 4,
    borderColor: "black",
    borderRadius: Dimensions.get("window").width / 12,
  },
  text: {
    fontSize: 40,
    fontWeight: "700",
    fontStyle: "italic",
  },
});
