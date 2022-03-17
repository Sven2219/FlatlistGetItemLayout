import React from 'react';
import {FlatList, StyleSheet, View, Text, SafeAreaView} from 'react-native';

const items = new Array(10).fill(0).map((_, index) => ({
  id: index,
  applied: Boolean(index % 2),
  name: `Item${index}`,
}));

const ITEM_WIDTH = 90;
const ITEM_MARGIN_RIGHT = 10;

const App = () => {
  const renderItem = ({item}) => (
    <View style={[styles.item, {height: item.applied ? 150 : 100}]}>
      <Text>{item.name}</Text>
    </View>
  );

  const keyExtractor = item => item.id;

  const getItemLayout = (_, index) => {
    return {
      length: ITEM_WIDTH + ITEM_MARGIN_RIGHT,
      offset: (ITEM_WIDTH + ITEM_MARGIN_RIGHT) * (index - 1),
      index,
    };
  };

  return (
    <SafeAreaView>
      <FlatList
        data={items}
        horizontal={true}
        initialScrollIndex={4}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    width: ITEM_WIDTH,
    marginRight: ITEM_MARGIN_RIGHT,
    borderWidth: 1,
  },
});

export default App;
