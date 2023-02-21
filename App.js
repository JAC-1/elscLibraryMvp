import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open dup App.js to start working on your app!</Text>
      <Text>Pee pee poo poo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "green",
    backgroundColor: "red",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});
