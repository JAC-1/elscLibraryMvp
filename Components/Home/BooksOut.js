import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path } from "react-native-svg";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";

export default function BooksOut({ navigation }) {
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
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <StatusBar style="dark" />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.header}>Books out</Text>
        <Image
          style={styles.bookWireframe}
          source={require("../../assets/images/bookWireframe.png")}
        />

        <Text style={styles.span}>Due 23/01/26</Text>
        <Image
          style={styles.bookWireframe}
          source={require("../../assets/images/bookWireframe.png")}
        />
        <Text style={styles.span}>Due 23/01/26</Text>
        <Image
          style={styles.bookWireframe}
          source={require("../../assets/images/bookWireframe.png")}
        />
        <Text style={styles.span}>Due 23/01/26</Text>
        <Image
          style={styles.bookWireframe}
          source={require("../../assets/images/bookWireframe.png")}
        />
        <Text style={styles.span}>Due 23/01/26</Text>
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
  span: {
    fontFamily: "BebasNeue",
    fontWeight: "400",
    fontSize: 30,
    color: "black",
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
    backgroundColor: "#817BC9",
    width: "65%",
    height: Dimensions.get("window").height * 0.15,
    marginBottom: 20,

    justifyContent: "center",
    alignItems: "center",

    borderWidth: 3,
    borderColor: "black",
    borderRadius: 15,
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
  bookWireframe: {
    width: 200,
    height: 300,
    marginHorizontal: 15,
  },
});
