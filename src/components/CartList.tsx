import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import CartItem from './CartItem';

interface CartProps {
  title: string;
  cartItems: any;
  cartTotal: number;
  cartQty: number;
}

interface CartState {}

class CartList extends Component<CartProps, CartState> {
  renderItem = ({ item, index }: { item: any; index: any }) => (
    <CartItem item={item} index={index} buttonTitle={'Remove from cart'} />
  );

  render() {
    const { title, cartItems, cartTotal, cartQty } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
          data={cartItems}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.name}
        />
        <View style={styles.hairline} />
        <Text style={styles.text}>Total: $ {cartTotal.toFixed(2)}</Text>
        <Text style={styles.text}>Cart Qty: {cartQty}</Text>
        <View style={styles.hairline} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  hairline: {
    backgroundColor: '#A2A2A2',
    height: 2,
    marginBottom: 5,
    marginTop: 5,
    width: '100%',
  },
});

const mapStateToProps = (state: { cart: { cartItems: any[]; total: any; qty: number } }) => ({
  cartItems: state.cart.cartItems,
  cartTotal: state.cart.total,
  cartQty: state.cart.qty,
});

export default connect(mapStateToProps)(CartList);
