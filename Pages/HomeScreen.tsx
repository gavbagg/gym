import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { HistoricTile } from "./Components/HistoricTile";
import { Navbar } from "./Components/Navbar";

const data = [
  {
    date: "10 feb",
    title: "Push",
    location: "Puregym Bayswater",
    movements: 5
  },
  {
    date: "9 feb",
    title: "Pull",
    location: "Puregym Bayswater",
    movements: 6
  },
  {
    date: "8 feb",
    title: "Legs",
    location: "Puregym Bayswater",
    movements: 6
  },
  {
    date: "7 feb",
    title: "Push",
    location: "Puregym Bayswater",
    movements: 4
  },
  {
    date: "6 feb",
    title: "Pull",
    location: "Puregym Bayswater",
    movements: 5
  },
  {
    date: "5 feb",
    title: "Legs",
    location: "Puregym Bayswater",
    movements: 5
  }
];

export class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <Text style={styles.imageText}>Gym App</Text>
        </View>
        <View style={styles.history}>
          <FlatList
            style={{ flex: 1 }}
            data={data}
            renderItem={({ item }) => {
              console.log(item);
              return <HistoricTile {...item} />;
            }}
          />
        </View>
        <Navbar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#404040",
    textAlign: "center",
    paddingLeft: 20,
    paddingRight: 20
  },
  image: {
    flex: 2,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  imageText: {
    color: "white",
    fontSize: 30
  },
  history: {
    flex: 10,
    overflow: "scroll"
  }
});
