import React from "react";
import { View, StyleSheet } from "react-native";

const HStack = ({ children, style, space }) => {
  const containerStyle = [
    styles.container,
    space && { marginHorizontal: space / 2 },
    style,
  ];

  const spacedChildren = React.Children.map(children, (child, index) => {
    return (
      <View
        style={
          index < React.Children.count(children) - 1 && { marginRight: space }
        }
      >
        {child}
      </View>
    );
  });

  return <View style={containerStyle}>{spacedChildren}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Horizontal direction
    alignItems: "center", // Align items vertically
  },
});

export default HStack;
