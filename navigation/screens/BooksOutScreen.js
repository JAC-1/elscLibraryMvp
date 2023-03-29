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

export default function BooksOutScreen({ navigation }) {
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
    marginBottom: 15,
  },
  bookWireframe: {
    width: 200,
    height: 300,
    marginHorizontal: 15,
  },
});
