import React from "react";
import { Text, View } from "react-native";
import { Card, Icon } from "react-native-paper";
import HStack from "./HStack";
import VStack from "./VStack";

export const Page = () => {
  const tileData = [
    { icon: <Icon source="plus" />, label: "Add Customer 1" },
    { icon: <Icon source="minus" />, label: "Remove Customer 2" },
    { icon: <Icon source="star" />, label: "Favorite Customer 3" },
    // Add more tile data as needed
  ];

  const renderTiles = (tiles) => {
    return tiles.map((tile, index) => (
      // <Tile key={index} icon={tile.icon} label={tile.label} />
      <Card key={index}>
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

    for (let i = 0; i < tileData.length; i += maxTilesPerRow) {
      const tilesInRow = tileData.slice(i, i + maxTilesPerRow);
      hStacks.push(renderTiles(tilesInRow));
    }

    return hStacks.map((hStack, index) => (
      <HStack key={index} space={10} style={{ marginTop: index > 0 ? 10 : 0 }}>
        {hStack}
      </HStack>
    ));
  };

  return (
    <View>
      <VStack space={15} style={{ padding: 15 }}>
        {renderHStacks()}
      </VStack>
    </View>
  );
};
