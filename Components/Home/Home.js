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
    <SafeAreaView style={styles.contentContainer}>
      <StatusBar style="dark" />
<<<<<<< HEAD:Components/Home/Home.js
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
        <View style={styles.buttonContainer}>
          <Pressable style={styles.purpleButton}></Pressable>
        </View>
        <View>
          <Text style={styles.text}>DUE 01/24</Text>
        </View>
      </ScrollView>
=======
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
      <View style={styles.buttonContainer}>
        <Pressable style={styles.greenButton}></Pressable>
      </View>
      <View>
        <Text style={styles.text}>DUE 01/24</Text>
      </View>
>>>>>>> main:navigation/screens/HomeScreen.js
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    color: "green",
    backgroundColor: "white",
    flexDirection: "column",
<<<<<<< HEAD:Components/Home/Home.js
  },
  divForCornerLogo: {
    position: "relative",
    right: 10,
    top: Platform.OS === "ios" ? 20 : 0,
    height: 100,
    width: "100%",
    backgroundColor: "white",
    alignItems: "flex-end",
    justifyContent: "flex-start",
=======
    height: "100%",
>>>>>>> main:navigation/screens/HomeScreen.js
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
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
    paddingVertical: 20,
  },
  greenButton: {
    backgroundColor: "lightgreen",
    width: "80%",
    paddingVertical: 30,
    borderWidth: 4,
    borderColor: "black",
<<<<<<< HEAD:Components/Home/Home.js
    borderRadius: 15,
=======
    borderRadius: Dimensions.get("window").width / 12,
>>>>>>> main:navigation/screens/HomeScreen.js
  },
  navigateButton: {
    backgroundColor: "#7FFAA9",
    width: "80%",
    paddingVertical: 30,
    borderWidth: 4,
    borderColor: "black",
<<<<<<< HEAD:Components/Home/Home.js
    borderRadius: 20,
=======
    borderRadius: Dimensions.get("window").width / 12,
>>>>>>> main:navigation/screens/HomeScreen.js
  },
  text: {
    fontSize: 40,
    fontWeight: "700",
    fontStyle: "italic",
  },
});
