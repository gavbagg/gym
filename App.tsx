import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HomeScreen } from "./Pages/HomeScreen";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
