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
import { Ionicons } from "@expo/vector-icons";

export default function BooksHistoryScreen({ navigation }) {
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
        <Text style={styles.header}>History</Text>
        <Image
          style={styles.bookWireframe}
          source={require("../../assets/images/bookWireframe.png")}
        />
        <View style={styles.dueDateContainer}>
          <Text style={styles.span}>23/04/10</Text>
          <Ionicons name={"arrow-forward-outline"} size={30} color={"black"} />
          <Text style={styles.span}>23/04/25</Text>
        </View>
        <Image
          style={styles.bookWireframe}
          source={require("../../assets/images/bookWireframe.png")}
        />
        <View style={styles.dueDateContainer}>
          <Text style={styles.span}>23/05/26</Text>
          <Ionicons name={"arrow-forward-outline"} size={30} color={"black"} />
          <Text style={styles.span}>23/06/10</Text>
        </View>
        <Image
          style={styles.bookWireframe}
          source={require("../../assets/images/bookWireframe.png")}
        />
        <View style={styles.dueDateContainer}>
          <Text style={styles.span}>23/04/10</Text>
          <Ionicons name={"arrow-forward-outline"} size={30} color={"black"} />
          <Text style={styles.span}>23/04/30</Text>
        </View>
        <Image
          style={styles.bookWireframe}
          source={require("../../assets/images/bookWireframe.png")}
        />
        <View style={styles.dueDateContainer}>
          <Text style={styles.span}>23/04/19</Text>
          <Ionicons name={"arrow-forward-outline"} size={30} color={"black"} />
          <Text style={styles.span}>23/05/12</Text>
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
  dueDateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
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
    borderRadius: "15%",
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
