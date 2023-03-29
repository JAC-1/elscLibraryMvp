import React, { Component, PureComponent } from "react";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path } from "react-native-svg";

import { useFonts } from "expo-font";

import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
} from "react-native";

export default function TitleScreen({ navigation }) {
  const [loaded] = useFonts({
    "BebasNeue-Regular": require("../../assets/fonts/BebasNeue-Regular.ttf"),
    "BalooThambi2-Regular": require("../../assets/fonts/BalooThambi2-Regular.ttf"),
    "Pattaya-Regular": require("../../assets/fonts/Pattaya-Regular.ttf"),
    "Raleway-Regular": require("../../assets/fonts/Raleway-Regular.ttf"),
    "Raleway-Bold": require("../../assets/fonts/Raleway-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <LinearGradient colors={["#7197FB", "#B7CAFB"]} style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Svg
          width="277"
          height="210"
          fill="#73C6B7"
          style={{
            position: "absolute",
            right: -20,
            top: -20,
          }}
          viewBox="0 0 277 210"
        >
          <Path d="M162.024 4.02714C200.555 4.02509 253.028 -12.2579 271.912 20.6743C291.69 55.1654 248.466 91.7333 233.357 128.425C226.508 145.056 220.604 160.574 208.698 174.19C195.331 189.477 182.56 209.906 162.024 210C141.461 210.094 133.108 184.015 114.914 174.619C77.9886 155.548 19.5665 166.423 4.07294 128.425C-11.3558 90.5859 19.746 46.2048 52.148 20.6859C82.1856 -2.97082 123.497 4.02918 162.024 4.02714Z" />
        </Svg>

        <Svg
          width="365"
          height="271"
          fill="#F66C6494"
          style={{
            position: "absolute",
            left: -200,
            top: 160,
          }}
          viewBox="0 0 365 271"
        >
          <Path d="M171.156 16.4602C193.047 21.0446 211.436 28.7543 231.894 37.3153C275.448 55.5415 336.887 52.9126 355.675 93.6761C376.804 139.521 360.427 198.793 322.669 234.27C284.787 269.864 224.064 276.653 171.156 267.05C126.04 258.861 101.663 218.487 69.2186 188.267C36.8848 158.149 -16.3147 136.17 -14.9752 93.6761C-13.641 51.3506 33.3539 21.7438 75.0125 4.46186C105.701 -8.26915 138.365 9.59325 171.156 16.4602Z" />
        </Svg>

        <Svg
          width="408"
          height="341"
          fill="#817BC9"
          viewBox="0 0 408 341"
          style={{
            position: "absolute",
            right: -220,
            top: 320,
          }}
        >
          <Path d="M184.654 8.29748C225.855 -9.20694 276.159 2.92356 313.691 26.6129C359.261 55.3758 420.827 98.2338 405.65 147.786C389.772 199.625 298.173 178.158 256.044 214.825C217.583 248.301 236.091 330.541 184.654 340.132C135.382 349.32 111.26 283.304 77.8862 248.047C47.8082 216.271 -13.2734 187.607 2.58454 147.786C19.8216 104.502 97.875 131.315 136.006 102.102C165.838 79.2466 149.575 23.2006 184.654 8.29748Z" />
        </Svg>

        <View style={styles.headerContainer}>
          <Text style={styles.span}>ELSC</Text>
          <Text style={styles.span}>Library</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Pressable
            onPress={() => navigation.navigate("Login")}
            style={styles.buttonContainer}
          >
            <Image source={require('../../assets/graphics/LoginButton.png')} style={styles.loginButton} resizeMode="contain" />
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Register")}
            style={styles.buttonContainer}
          >
            <Image source={require('../../assets/graphics/RegisterButton.png')} style={styles.registerButton} resizeMode="contain" />
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  span: {
    color: "white",
    fontSize: 90,
    fontFamily: "Pattaya-Regular",
    margin: -20,

    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,

    transform: [{ rotate: "-10deg" }],
  },
  buttonsContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  buttonContainer: {
    paddingVertical: "4%"
  },
  loginButton: {
    width: "70%",
    height: undefined,
    aspectRatio: 2.7
  },
  registerButton: {
    width: "60%",
    height: undefined,
    aspectRatio: 2.7
  }
});
