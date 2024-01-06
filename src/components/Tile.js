import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Tile = ({ icon, label, style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#3498db", // Use your desired background color
    borderRadius: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    marginBottom: 15,
    width: "90%", // Adjusted width
    alignSelf: "center", // Center the tile horizontally
  },
  iconContainer: {
    marginRight: 15,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff", // Use your desired text color
  },
});

export default Tile;
