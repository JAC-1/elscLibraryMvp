import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import React from "react";
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

export default function IntroPopupScreen({ navigation }) {
  const [loaded] = useFonts({
    BebasNeue: require("../../assets/fonts/BebasNeue-Regular.ttf"),
    BalooThambi: require("../../assets/fonts/BalooThambi2-Regular.ttf"),
    Raleway: require("../../assets/fonts/Raleway-Regular.ttf"),
    RalewayBold: require("../../assets/fonts/Raleway-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <StatusBar style="dark" />
      <View style={styles.popupContainer}>
        <View style={styles.internalMarginSetterContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Your Library</Text>
          </View>
          <View style={styles.paragraphsContainer}>
            <Text style={styles.paragraphsText}>
              Here you can find all your books in one place.
            </Text>
            <Text style={styles.paragraphsText}>
              You can also accept our push notifications to know when to bring
              back a book.
            </Text>
            <Text style={styles.paragraphsText}>
              We are constantly updating this app, so there will be new features
              in the future!
            </Text>
          </View>
        </View>
        <Pressable
          style={{
            position: "absolute",
            bottom: -20,
            right: 20,
            transform: [{ rotate: "-5deg" }],
          }}
          onPress={() => navigation.navigate("HomeNavigation")}
        >
          <View style={styles.purpleButton}>
            <Text style={styles.buttonText}>Okay!</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },

  internalMarginSetterContainer: { width: "90%" },
  popupContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: "80%",
    width: "85%",

    borderWidth: 3,
    borderColor: "black",
    borderBottomLeftRadius: "40%",
    borderBottomRightRadius: "40%",
    borderTopLeftRadius: "40%",
    borderTopRightRadius: "10%",
  },
  headerContainer: { textAlign: "left", width: "100%" },
  headerText: {
    fontFamily: "RalewayBold",
    fontWeight: "bold",
    fontSize: 30,
  },
  paragraphsContainer: {
    textAlign: "left",
    width: "100%",
  },
  paragraphsText: {
    fontFamily: "BalooThambi",
    fontSize: 20,
    paddingVertical: 10,
  },
  purpleButton: {
  },
  buttonText: {
  },
});
