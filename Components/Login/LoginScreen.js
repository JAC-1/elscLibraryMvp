import React, { useState } from "react";
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
  View,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (text) => {
    if (/^[a-zA-Z0-9@._-]+$/.test(text)) {
      setEmail(text);
    }
  };

  const handlePasswordChange = (text) => {
    // Define a regex pattern to match the allowed characters for the password input
    const passwordRegex = /^[A-Za-z0-9_-]+$/;

    // Check if the input matches the password regex pattern
    if (passwordRegex.test(text)) {
      setPassword(text);
    }
  };

  const [loaded] = useFonts({
    BebasNeue: require("../../assets/fonts/BebasNeue-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={globalStyles.safeAreaContainer}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Text style={styles.header}>Login</Text>
        <Text style={styles.span}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={handleEmailChange}
          secureTextEntry={false}
        />
        <Text style={styles.span}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry={true}
        />
        <Pressable
          onPress={() => navigation.navigate("QuoteScreen")}
          style={globalStyles.buttonContainer}
        >
          <Image
            source={require("../../assets/graphics/LoginButton.png")}
            style={globalStyles.loginButton}
          />
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
    paddingTop:
      Platform.OS === "android" ? Dimensions.get("window").height * 0.05 : 0,
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
    height: Dimensions.get("window").height * 0.08,
    width: Dimensions.get("window").width * 0.65,
    padding: 10,

    borderWidth: 3,
    borderColor: "black",
    borderRadius: Dimensions.get("window").width / 20,
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
