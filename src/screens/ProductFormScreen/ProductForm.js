// ProductForm.js
import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Icon,
  IconButton,
  Switch,
  Text,
  Title,
} from "react-native-paper";
import HStack from "../../components/HStack";
import { styles } from "./style";
const ProductForm = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [active, setActive] = useState(false);

  const saveCustomer = () => {
    // Basic form validation
    if (!firstName || !lastName || !phoneNumber || !email) {
      console.log("Please fill in all fields.");
      return;
    }

    // Add logic to save customer details (e.g., API call, local storage, etc.)
    console.log("Product Details Saved:", {
      title,
      description,
      price,
      active,
    });

    // Navigate back to the home screen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Title>
        <Text variant="headlineLarge">Add Product</Text>
      </Title>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <TextInput
          style={styles.inputArea}
          placeholder="Description"
          multiline
          numberOfLines={4}
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Price"
          value={price}
          onChangeText={(text) => setPrice(text)}
          keyboardType="numeric"
        />

        <Card>
          <Card.Title title="Images"></Card.Title>
          <Card.Content>
            {images.map((image, index) => (
              <Avatar.Image size={24} source={image} />
            ))}

            <IconButton icon="plus-box" size={40} />
          </Card.Content>
        </Card>

        <HStack space={20} style={{ margin: 10 }}>
          <Text variant="headlineSmall" style={styles.label}>
            Active
          </Text>
          <Switch value={active} onChange={(value) => setActive(value)} />
        </HStack>

        <View style={styles.buttonContainer}>
          <Button
            style={{ width: 150, height: 40 }}
            mode="elevated"
            onPress={saveCustomer}
            buttonColor="#3498db"
            textColor="#fff"
            labelStyle={{ fontSize: 20 }}
          >
            Save
          </Button>
        </View>
      </View>
    </View>
  );
};

export default ProductForm;
