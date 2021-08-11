import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { products } from '../../data';

const Item = ({ name }) => (
  <View style={styles.item}>
    <Text style={styles.name}>{name} </Text>
  </View>
);

const Products = (): React.ReactElement => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => <Item name={item.name} />;

  return (
    <View>
      <Text style={styles.title}>Product List</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        extraData={selectedId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#D3D3D3',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 28,
  },
});

export default Products;

