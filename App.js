import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import CustomerForm from "./src/screens/CustomerFormScreen/CustomerForm";
import Header from "./src/components/Header";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./src/components/BottomTab";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="CustomerForm" component={CustomerForm} />
        </Stack.Navigator>
      </NavigationContainer>
      <BottomTab />
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
