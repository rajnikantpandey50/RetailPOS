import React, { useState } from "react";
import { BottomNavigation, Text } from "react-native-paper";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ProductsScreen from "../screens/ProductsScreen/ProductsScreen";

const BottomTab = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    {
      key: "orders",
      title: "Orders",
      focusedIcon: "book-open",
      unfocusedIcon: "book-open-outline",
    },
    {
      key: "products",
      title: "Products",
      focusedIcon: "tag-multiple",
      unfocusedIcon: "tag-multiple-outline",
    },
    {
      key: "customers",
      title: "Customers",
      focusedIcon: "account",
      unfocusedIcon: "account-outline",
    },
    {
      key: "more",
      title: "More",
      focusedIcon: "more",
      unfocusedIcon: "more",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: () => <HomeScreen navigation={navigation} />,
    orders: () => <Text>Orders</Text>,
    products: () => <ProductsScreen navigation={navigation} />,
    customers: () => <Text>Customers</Text>,
    more: () => <Text>More</Text>,
  });
  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomTab;
