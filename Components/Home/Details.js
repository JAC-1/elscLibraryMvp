import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  ScrollView,
  SafeAreaView,
  Modal,
  Dimensions,
} from "react-native";

/* Note to self: When you get rid of the modal triggering button, get rid of the View and the flex that it uses, or there will be a third of the page that will seem buggy.  */

export default function Details({ navigation }) {
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
      <View style={styles.centering}>
        <TouchableHighlight
          onPress={show}
          style={{
            borderRadius: "20%",
            alignItems: "center",
            width: "80%",
          }}
        >
          <View style={styles.triggerButton}>
            <Text style={{ textAlign: "center", color: "white" }}>
              View Student ID Card
            </Text>
          </View>
        </TouchableHighlight>

        <Modal
          visible={visible}
          onRequestClose={hide}
          animationType="slide"
          transparent
        >
          <Pressable style={styles.upper} onPress={hide} />
          <View style={styles.lower}>
            <Button title="Hide" onPress={hide} />
            <View style={styles.idCardDiv}>
              <View style={styles.innerTextDiv}>
                <Text style={styles.studentNameText}>STUDENT ID</Text>
                <Text style={styles.studentIdText}>123455819128312</Text>
              </View>
              <View style={styles.barcodeDiv}>
                <Image
                  style={styles.barcodeImage}
                  source={require("../../assets/images/barcode.png")}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <View style={styles.centering}>
        <Pressable onPress={() => navigation.navigate("BooksOut")}>
          <Text style={styles.fontFragment}>Books out</Text>
        </Pressable>
      </View>
      <View style={styles.centering}>
        <Pressable onPress={() => navigation.navigate("History")}>
          <Text style={styles.fontFragment}>History</Text>
        </Pressable>
      </View>
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
  centering: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fontFragment: {
    fontFamily: "BebasNeue",
    fontWeight: "400",
    fontSize: 60,
  },

  upper: {
    height: "40%",
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
  },
  idCardDiv: {
    width: "85%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8B8FF9",

    borderWidth: 3,
    borderColor: "black",
    borderBottomLeftRadius: "40%",
    borderBottomRightRadius: "40%",
    borderTopLeftRadius: "40%",
    borderTopRightRadius: "10%",

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
    borderBottomLeftRadius: "30%",
    borderBottomRightRadius: "30%",
    borderTopLeftRadius: "40%",
    borderTopRightRadius: "10%",

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
    borderRadius: "20%",
  },
});
