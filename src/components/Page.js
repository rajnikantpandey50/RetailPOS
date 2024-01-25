import React, { useState } from "react";
import { Text, View } from "react-native";
import { Card, Icon } from "react-native-paper";
import HStack from "./HStack";
import VStack from "./VStack";

export const Page = ({ style, navigation }) => {
  const addTile = (e) => {
    console.log("Add tile");
    console.log("state: ", tiles.length);
    setTiles((t) => [
      ...t,
      { icon: <Icon source="star" size={30} />, label: "Favorite Customer 3" },
    ]);
  };
  const addCustomer = (e) => {
    navigation.navigate("CustomerForm");
  };
  const tileData = [
    {
      icon: <Icon source="plus" size={30} />,
      label: "Add Customer 1",
      onPress: addCustomer,
    },
    {
      icon: <Icon source="minus" size={30} />,
      label: "Remove Customer 2",
      onPress: () => console.log("2 Pressed"),
    },
    {
      icon: <Icon source="star" size={30} />,
      label: "Favorite Customer 3",
      onPress: () => console.log("3 Pressed"),
    },
    {
      icon: <Icon source="plus" size={30} />,
      label: "Add Tile",
      onPress: addTile,
    },
    // Add more tile data as needed
  ];

  const [tiles, setTiles] = useState(tileData);

  const renderTiles = (tiles) => {
    return tiles.map((tile, index) => (
      // <Tile key={index} icon={tile.icon} label={tile.label} />
      <Card
        key={index}
        style={{ width: 190, height: 100 }}
        onPress={() => tile.onPress()}
      >
        <Card.Title title={tile.icon} />
        <Card.Content>
          <Text>{tile.label}</Text>
        </Card.Content>
      </Card>
    ));
  };

  const renderHStacks = () => {
    const maxTilesPerRow = 2;
    const hStacks = [];

    for (let i = 0; i < tiles.length; i += maxTilesPerRow) {
      const tilesInRow = tiles.slice(i, i + maxTilesPerRow);
      hStacks.push(renderTiles(tilesInRow));
    }

    return hStacks.map((hStack, index) => (
      <HStack key={index} space={15} style={{ marginTop: index > 0 ? 10 : 0 }}>
        {hStack}
      </HStack>
    ));
  };

  return (
    <View style={style}>
      <VStack space={15} style={{ padding: 15 }}>
        {renderHStacks()}
      </VStack>
    </View>
  );
};
