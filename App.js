import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import CustomerForm from "./src/screens/CustomerFormScreen/CustomerForm";
import ProductForm from "./src/screens/ProductFormScreen/ProductForm";
import Header from "./src/components/Header";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./src/components/BottomTab";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";

// import { Amplify } from "aws-amplify";
// import amplifyconfig from "./src/amplifyconfiguration.json";
// Amplify.configure(amplifyconfig);

export default function App() {
  const Stack = createStackNavigator();
  const Tab = createMaterialBottomTabNavigator();
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={BottomTab} />
          <Stack.Screen name="CustomerForm" component={CustomerForm} />
          <Stack.Screen name="ProductForm" component={ProductForm} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
