import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

interface ProductProps {
  item?: any;
  product?: any;
  addItemsToCart?: any;
}

interface ProductsState {}

class Item extends Component<ProductProps, ProductsState> {
  addToCart = () => {
    this.props.addItemsToCart(this.props.item);
  };

  render() {
    const { product } = this.props;
    return (
      <View style={styles.item}>
        <Text style={styles.name}>{product.name} </Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <Button title="Add to cart" onPress={this.addToCart} />
      </View>
    );
  }
}

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
