import * as React from "react";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "expo-font";

import {
  StyleSheet,
  Dimensions,
  Button,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  Text,
  Pressable,
} from "react-native";

export default function RegisterScreen({ navigation }) {
  const [loaded] = useFonts({
    BebasNeue: require("../../assets/fonts/BebasNeue-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <StatusBar style="dark" />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.header}>Register</Text>
        <Text style={styles.span}>Name(ローマ字)</Text>
        <TextInput style={styles.input} />
        <Text style={styles.span}>Student Id</Text>
        <TextInput style={styles.input} />
        <Text style={styles.span}>Email</Text>
        <TextInput style={styles.input} />
        <Text style={styles.span}>Password</Text>
        <TextInput style={styles.input} />
        <Text style={styles.span}>Date of birth</Text>
        <TextInput style={styles.input} />
        <Text style={styles.span}>City</Text>
        <TextInput style={styles.input} />
        <Pressable
          style={styles.purpleButton}
          onPress={() => navigation.navigate("IntroPopup")}
        >
          <Text style={styles.purpleButtonText}>Login</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    backgroundColor: "white",
  },
  scrollView: {
    height: "100%",
    width: "100%",
  },
  contentContainer: {
    alignItems: "center",
  },
  header: {
    fontSize: 60,
    fontFamily: "BebasNeue",
  },
  span: {
    fontFamily: "BebasNeue",
    marginTop: 20,
    fontWeight: "400",
    fontSize: 30,
    color: "#00000066",
  },
  input: {
    backgroundColor: "white",
    height: Dimensions.get("window").height * 0.1,
    width: Dimensions.get("window").width * 0.65,
    padding: 10,

    borderWidth: 3,
    borderColor: "black",
    borderRadius: Dimensions.get("window").width / 12,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0.2,
  },
  purpleButton: {
    backgroundColor: "#817BC9",
    width: "65%",
    height: Dimensions.get("window").height * 0.15,
    marginBottom: 20,

    justifyContent: "center",
    alignItems: "center",

    borderWidth: 3,
    borderColor: "black",
    borderRadius: Dimensions.get("window").width / 12,
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0.2,
  },
  purpleButtonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 30,
    letterSpacing: 3,
    fontFamily: "BebasNeue",
  },
});
