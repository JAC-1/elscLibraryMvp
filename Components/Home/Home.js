import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createStackNavigator();

export default function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView>
      <StatusBar style="dark" />
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
          <Text style={styles.text}>DUE 01/24</Text>
          <Text style={styles.text}>DUE 01/24</Text>
          <Text style={styles.text}>DUE 01/24</Text>
          <Text style={styles.text}>DUE 01/24</Text>
          <Text style={styles.text}>DUE 01/24</Text>
          <Text style={styles.text}>DUE 01/24</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    color: "green",
    backgroundColor: "white",
    flexDirection: "column",
  },
  divForCornerLogo: {
    height: 100,
    width: "100%",
    backgroundColor: "white",
    alignItems: "flex-end",
    justifyContent: "flex-start",
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
  purpleButton: {
    backgroundColor: "#7FFAA9",
    width: "80%",
    paddingVertical: 30,
    borderWidth: 4,
    borderColor: "black",
    borderRadius: 15,
  },
  navigateButton: {
    backgroundColor: "#7FFAA9",
    width: "80%",
    paddingVertical: 30,
    borderWidth: 4,
    borderColor: "black",
    borderRadius: 20,
  },
  text: {
    fontSize: 40,
    fontWeight: "700",
    fontStyle: "italic",
  },
});
