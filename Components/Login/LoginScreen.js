import * as React from "react";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
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
  Image,
  View
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [loaded] = useFonts({
    BebasNeue: require("../../assets/fonts/BebasNeue-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.safeAreaContainer}>
      <StatusBar style="dark" />
      <View
        style={styles.container}
      >
        <Text style={styles.header}>Login</Text>
        <Text style={styles.span}>Email</Text>
        <TextInput style={styles.input} />
        <Text style={styles.span}>Password</Text>
        <TextInput style={styles.input} />
        <Pressable
          onPress={() => navigation.navigate("QuoteScreen")}
          style={globalStyles.buttonContainer}
        >
          <Image source={require('../../assets/graphics/LoginButton.png')} style={globalStyles.loginButton} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: "30%",
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
  loginButton: {
    width: 10,
    height: undefined,
    ratio: 0.9,
  },
});
