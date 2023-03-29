import * as React from "react";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { globalStyles } from "../../Styles/globalStyles";

import { useFonts } from "expo-font";

import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
  TextInput,
  Text,
  Pressable,
  Image
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
          style={globalStyles.buttonContainer}
          onPress={() => navigation.navigate("Intro")}

        >
          <Image source={require('../../assets/graphics/LoginButton.png')} style={globalStyles.loginButton} resizeMode="contain" />
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
    paddingTop: "9%"
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
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0.2,
  },
  purpleButton: {
  },
  purpleButtonText: {
  },
});
