import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  SafeAreaView,
} from "react-native";

export default function HomeScreen() {
  const [loaded] = useFonts({
    BebasNeue: require("../../assets/fonts/BebasNeue-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.span}>ELSC</Text>
          <Text style={styles.span}>LIBRARY</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Pressable
            style={styles.purpleButton}
            onPress={() => alert("This is the LOGIN button.")}
          >
            <Text style={styles.purpleButtonText}>LOGIN</Text>
          </Pressable>
          <Pressable
            style={styles.whiteButton}
            onPress={() => alert("This is the REGISTER button.")}
          >
            <Text style={styles.whiteButtonText}>REGISTER</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  span: {
    color: "black",
    fontWeight: "900",
    fontSize: 90,
    fontFamily: "BebasNeue",
  },
  buttonsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  purpleButton: {
    backgroundColor: "#4B4FBD",
    paddingHorizontal: 90,
    paddingVertical: 30,
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0.2,
  },
  purpleButtonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 20,
    letterSpacing: 3,
  },
  whiteButton: {
    backgroundColor: "white",
    paddingHorizontal: 40,
    paddingVertical: 25,
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 10,
    margin: 8,
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0.2,
  },
  whiteButtonText: {
    color: "black",
    fontWeight: "700",
    fontSize: 20,
    letterSpacing: 3,
  },
});
