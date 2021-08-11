import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

const CartItem = ({
  name,
  price,
  buttonTitle,
}: {
  name: string;
  price: string;
  buttonTitle: string;
}) => {
  const amount = parseFloat(price).toFixed(2);

  const onPress = () => {
    Alert.alert('Removed item');
  };

  return (
    <View style={styles.item}>
      <Text style={styles.name}>{name} </Text>
      <Text style={styles.price}>${amount}</Text>
      <Text style={styles.price}>Qty: </Text>
      <Text style={styles.price}>Total $ </Text>
      <Button title={buttonTitle} onPress={onPress} />
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
    textAlign: 'right',
  },
});

export default CartItem;
