import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const Navbar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>Profile</Text>
      <Text style={styles.icon}>Progress</Text>
      <Text style={styles.icon}>Add</Text>
      <Text style={styles.icon}>History</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    borderColor: "white",
    justifyContent: "center",
    marginTop: 10,
    flex: 1,
    flexDirection: "row",
    width: "100%"
  },
  icon: {
    flex: 1,
    textAlign: "center",
    color: "white",
    fontSize: 20
  }
});
