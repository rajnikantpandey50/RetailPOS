import React from "react";
import { FlatList } from "react-native";
import { Avatar, Card, Icon, IconButton } from "react-native-paper";

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Card.Title
        title={product.title}
        left={<Avatar.Image source={product.image} />}
        right={<IconButton icon="greater-than" />}
      ></Card.Title>
    </Card>
  );
};

const Products = ({ products }) => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductCard product={item} />}
      keyExtractor={(item) => item.id}
    ></FlatList>
  );
};

export default Products;
