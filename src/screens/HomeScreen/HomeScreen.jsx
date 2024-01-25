import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../../components/Header";
import { Page } from "../../components/Page";
import { styles } from "./style";

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Page style={styles.page} navigation={navigation} />
    </View>
  
  );
};


export default HomeScreen;
