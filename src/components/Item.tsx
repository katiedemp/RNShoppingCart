import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Item = ({ name, price }: { name: string; price: string }) => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);
  const amount = parseFloat(price).toFixed(2);

  return (
    <View style={styles.item}>
      <Text style={styles.name}>{name} </Text>
      <Text style={styles.price}>${amount}</Text>
      <Button title="Add to cart" onPress={onPress} />
      <Text>{count ? count : null}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#D3D3D3',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center',
  },
});

export default Item;
