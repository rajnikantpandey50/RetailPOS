import React from "react";
import { View, StyleSheet } from "react-native";

const VStack = ({ children, style, space }) => {
  const containerStyle = [
    styles.container,
    space && { marginVertical: space / 2 },
    style,
  ];

  const spacedChildren = React.Children.map(children, (child, index) => {
    return (
      <View
        style={
          index < React.Children.count(children) - 1 && { marginBottom: space }
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
    flexDirection: "column", // Vertical direction
  },
});

export default VStack;
