import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path } from "react-native-svg";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
  TextInput,
  Image,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";

export default function Settings({ navigation }) {
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const [loaded] = useFonts({
    BebasNeue: require("../../assets/fonts/BebasNeue-Regular.ttf"),
    BalooThambi: require("../../assets/fonts/BalooThambi2-Regular.ttf"),
    Pattaya: require("../../assets/fonts/Pattaya-Regular.ttf"),
    Raleway: require("../../assets/fonts/Raleway-Regular.ttf"),
    RalewayBold: require("../../assets/fonts/Raleway-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const staticWidth = Dimensions.get("window").width;
  const staticHeight = Dimensions.get("window").height;
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <StatusBar style="dark" />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <Image
          style={styles.bookWireframe}
          source={require("../../assets/images/woman.png")}
        />

        <View style={styles.keyAndValueContainers}>
          <Text style={[styles.keySpan, styles.fontFragment]}>
            NAME(ローマ字):
          </Text>
          <Text style={[styles.valueSpan, styles.fontFragment]}>
            Jordan Nakamura
          </Text>
        </View>

        <View style={styles.keyAndValueContainers}>
          <Text style={[styles.keySpan, styles.fontFragment]}>NAME(漢字):</Text>
          <Text style={[styles.valueSpan, styles.fontFragment]}>
            ジョジョ　中村
          </Text>
        </View>

        <View style={styles.keyAndValueContainers}>
          <Text style={[styles.keySpan, styles.fontFragment]}>Student ID:</Text>
          <Text style={[styles.valueSpan, styles.fontFragment]}>
            2A12314123T%2
          </Text>
        </View>
        <View style={styles.keyAndValueContainers}>
          <Text style={[styles.keySpan, styles.fontFragment]}>Email:</Text>
          <Text style={[styles.valueSpan, styles.fontFragment]}>
            guyfieri@hotmail.com
          </Text>
        </View>

        <View style={styles.purpleUnderlinedContainer}>
          <Pressable onPress={() => navigation.navigate("History")}>
            <Text style={[styles.purpleUnderlined, styles.fontFragment]}>
              Change email
            </Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("History")}>
            <Text style={[styles.purpleUnderlined, styles.fontFragment]}>
              Change password
            </Text>
          </Pressable>
        </View>

        <View style={styles.emojisPartContainer}>
          <Pressable onPress={() => navigation.navigate("History")}>
            <View style={styles.emojisPartDividedForFlexSpaceBetween}>
              <Text style={[styles.emojisPart, styles.fontFragment]}>
                Report a bug
              </Text>
              <Text style={[styles.emojisPart, styles.fontFragment]}>😅</Text>
            </View>
          </Pressable>
          <Pressable onPress={show}>
            <View style={styles.emojisPartDividedForFlexSpaceBetween}>
              <Text style={[styles.emojisPart, styles.fontFragment]}>
                Make a suggestion
              </Text>
              <Text style={[styles.emojisPart, styles.fontFragment]}>🤩</Text>
            </View>
          </Pressable>
        </View>
        <Modal
          visible={visible}
          onRequestClose={hide}
          animationType="slide"
          transparent
        >
          <Pressable style={styles.upper} onPress={hide} />
          <View style={styles.lower}>
            <Button title="Hide" onPress={hide} />
            <Text style={[styles.keySpan, styles.fontFragment]}>Old Email</Text>
            <TextInput style={styles.input}></TextInput>
            <Text style={[styles.keySpan, styles.fontFragment]}>New Email</Text>
            <TextInput style={styles.input}></TextInput>
            <Pressable
              style={styles.purpleButton}
              onPress={() => navigation.navigate("QuoteScreen")}
            >
              <Text style={styles.purpleButtonText}>Change</Text>
            </Pressable>
          </View>
        </Modal>

        <View style={styles.logoutPartContainer}>
          <Pressable onPress={() => navigation.navigate("Title")}>
            <Text style={[styles.logoutPart, styles.fontFragment]}>Logout</Text>
          </Pressable>
        </View>
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
    paddingTop:
      Platform.OS === "android" ? Dimensions.get("window").height * 0.05 : 0,
  },
  scrollView: {
    height: "100%",
    width: "100%",
  },
  contentContainer: {
    alignItems: "center",
    backgroundColor: "white",
  },
  header: {
    fontSize: 60,
    fontFamily: "BebasNeue",
  },
  keyAndValueContainers: {
    backgroundColor: "white",
    width: Dimensions.get("window").width * 0.8,
    marginVertical: 15,
  },
  keySpan: {
    fontSize: 18,
  },
  valueSpan: {
    fontSize: 30,
    marginLeft: "10%",
  },
  fontFragment: {
    fontFamily: "BebasNeue",
    fontWeight: "400",
  },
  purpleUnderlined: {
    color: "#8B8FF9",
    fontSize: 40,
    textDecorationLine: "underline",
  },
  purpleUnderlinedContainer: {
    marginVertical: 25,
    backgroundColor: "white",
  },
  emojisPart: {
    fontSize: 30,
  },
  emojisPartContainer: {
    width: "80%",
    marginVertical: 25,
  },
  emojisPartDividedForFlexSpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoutPart: {
    fontSize: 40,
  },
  logoutPartContainer: {
    marginVertical: 25,
  },
  bookWireframe: {
    width: Dimensions.get("window").width * 0.6,
    height: Dimensions.get("window").width * 0.6,
    marginHorizontal: 15,
  },

  upper: {
    height: "30%",
  },
  lower: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 8,
    alignItems: "center",

    borderTopWidth: 2,
    borderTopColor: "black",
    borderLeftWidth: 2,
    borderLeftColor: "black",
    borderRightWidth: 2,
    borderRightColor: "black",

    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,

    zIndex: -2,
  },
  idCardDiv: {
    width: "85%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8B8FF9",

    borderWidth: 3,
    borderColor: "black",
    borderRadius: 12,

    shadowColor: "#000",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 0.2,
  },
  innerTextDiv: {
    textAlign: "left",
  },
  studentNameText: {
    color: "white",
    fontWeight: "700",
    fontSize: 15,
  },
  studentIdText: {
    color: "white",
    fontWeight: "700",
    fontSize: 20,
  },
  barcodeDiv: {
    height: 50,
    width: "85%",
    backgroundColor: "white",

    borderWidth: 3,
    borderColor: "black",
    borderRadius: 12,

    alignItems: "center",
    justifyContent: "center",
  },
  barcodeImage: {
    width: "85%",
    resizeMode: "contain",
  },
  triggerButton: {
    backgroundColor: "#9300C7",
    width: "100%",
    paddingVertical: 30,
    borderWidth: 4,
    borderColor: "black",
<<<<<<< HEAD:Components/Home/Settings.js
    borderRadius: 15,
=======
    borderRadius: Dimensions.get("window").width / 12,
>>>>>>> main:navigation/screens/SettingsScreen.js
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
<<<<<<< HEAD:Components/Home/Settings.js
    borderRadius: 15,
=======
    borderRadius: Dimensions.get("window").width / 12,
>>>>>>> main:navigation/screens/SettingsScreen.js
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
