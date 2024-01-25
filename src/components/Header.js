import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

const Header = ({ title, subtitle, style }) => {
  return (
    <View style={[styles.header, style]}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#3498db",
    padding: 15,
    alignItems: "center",
    ...Platform.select({
      ios: {
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
      },
      android: {
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
      },
    }),
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
  },
});

export default Header;
