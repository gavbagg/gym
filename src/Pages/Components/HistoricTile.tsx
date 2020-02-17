import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface HistoricTileProps {
  date: string;
  title: string;
  location: string;
  movements: number;
}

export const HistoricTile = ({
  date,
  title,
  location,
  movements
}: HistoricTileProps) => {
  return (
    <View key={date} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.details}>{date}</Text>
      <Text style={styles.details}>{location}</Text>
      <Text style={styles.details}>{movements} movements</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "white",
    marginTop: 10,
    flex: 1,
    width: "100%",
    padding: 10
  },
  title: {
    color: "white",
    fontSize: 20,
    marginBottom: 10
  },
  details: {
    color: "#D8D8D8",
    fontSize: 15
  },
  history: {
    flex: 4,
    backgroundColor: "#fff"
  }
});
