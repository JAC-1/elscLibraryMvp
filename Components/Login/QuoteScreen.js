import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import ConfettiCannon from "react-native-confetti-cannon";
import {
  StyleSheet,
  Text,
  Image,
  BackHandler,
  SafeAreaView,
  Dimensions,
} from "react-native";

class RNConfetti extends React.PureComponent {
  explosion;

  handleSomeKindOfEvent = () => {
    this.explosion && this.explosion.start();
  };

  render() {
    return (
      <ConfettiCannon
        count={200}
        fallSpeed={2000}
        explosionSpeed={250}
        colors={["teal", "aquamarine", "turquoise", "navyblue", "blue"]}
        origin={{
          x: Dimensions.get("window").width / 2,
          y: -30,
        }}
        autoStart={true}
        fadeOut={true}
        ref={(ref) => (this.explosion = ref)}
      />
    );
  }
}

export default function QuoteScreen({ navigation }) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.navigate("HomeNav");
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [navigation]);

  useEffect(() => {
    const backAction = () => {
      /* Return `true` to prevent going back from this screen */
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

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

  const myArray = [
    `"I have always imagined that Paradise will be a kind of a Library." ― Jorge Luis Borges`,
    `“The very existence of libraries affords the best evidence that we may yet have hope for the future of man.” ― T.S. Eliot`,
    `"When in doubt go to the library." ― J.K. Rowling`,
    `"I have found the most valuable thing in my wallet is my library card." ― Laura Bush`,
    `"Books are the best weapon in the world. This room’s the greatest arsenal we could have. Arm yourself!" ― Russell T. Davies`,
    `“The library is like a candy store where everything is free.” ― Jamie Ford`,
    `“A library doesn't need windows. A library is a window.” ― Stewart Brand`,
  ];

  const randomNumber = Math.floor(Math.random() * 7);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <RNConfetti />
      <Text style={styles.text}>{`${myArray[randomNumber]}`}</Text>
      <Image
        source={require("../../assets/images/buffer.gif")}
        style={{ zIndex: -2, width: 100, height: 100 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    fontFamily: "Raleway",
    fontSize: 25,
    textAlign: "center",
  },
});
