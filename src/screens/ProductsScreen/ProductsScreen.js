import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import HStack from "../../components/HStack";
import Products from "../../components/Products";
import VStack from "../../components/VStack";
import { styles } from "./style";

const ProductsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <VStack space={10}>
          <Button
            mode="elevated"
            buttonColor="#3498db"
            textColor="#fff"
            onPress={(e) => navigation.navigate("ProductForm")}
          >
            Add Product
          </Button>
          <HStack space={8}>
            <Button
              mode="elevated"
              buttonColor="#3498db"
              textColor="#fff"
              icon="import"
              style={styles.button}
            >
              Import
            </Button>
            <Button
              mode="elevated"
              buttonColor="#3498db"
              textColor="#fff"
              icon="export"
              style={styles.button}
            >
              Export
            </Button>
          </HStack>
        </VStack>
      </View>
      <Products />
    </View>
  );
};

export default ProductsScreen;
