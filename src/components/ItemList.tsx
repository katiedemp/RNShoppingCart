import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { products } from '../../data';
import Item from './Item';

const ItemList = ({ title }: { title: string }): React.ReactElement => {
  const renderItem = ({ item }: { item: any }) => <Item name={item.name} price={item.price} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList data={products} renderItem={renderItem} keyExtractor={(item) => item.name} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ItemList;
