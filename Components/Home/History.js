import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
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

export default function History({ navigation }) {
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
  dueDateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  span: {
    fontFamily: "BebasNeue",
    fontWeight: "400",
    fontSize: 30,
    color: "black",
  },
  bookWireframe: {
    width: 200,
    height: 300,
    marginHorizontal: 15,
  },
});
