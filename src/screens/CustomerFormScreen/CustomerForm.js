// CustomerForm.js
import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Button, Text, Title } from "react-native-paper";
import { styles } from "./style";
const CustomerForm = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const saveCustomer = () => {
    // Basic form validation
    if (!firstName || !lastName || !phoneNumber || !email) {
      console.log("Please fill in all fields.");
      return;
    }

    // Add logic to save customer details (e.g., API call, local storage, etc.)
    console.log("Customer Details Saved:", {
      firstName,
      lastName,
      phoneNumber,
      email,
    });

    // Navigate back to the home screen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Title>
        <Text variant="headlineLarge">Add Customer</Text>
      </Title>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
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

export default CustomerForm;
