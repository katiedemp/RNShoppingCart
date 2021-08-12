import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import CartItem from './CartItem';

interface CartProps {
  title: string;
  cartItems: any;
  cartTotal: number;
}

interface CartState {}

class CartList extends Component<CartProps, CartState> {
  renderItem = ({ item, index }: { item: any; index: any }) => (
    <CartItem item={item} index={index} buttonTitle={'Remove from cart'} />
  );

  render() {
    const { title, cartItems, cartTotal } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <FlatList
            data={cartItems}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.name}
          />
          <Text style={styles.text}>Total: $ {cartTotal.toFixed(2)}</Text>
        </View>
      </View>
    );
  }
}

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
  text: {
    textAlign: 'center',
    fontSize: 18,
  },
});

const mapStateToProps = (state: { cart: { cart: any; total: any } }) => ({
  cartItems: state.cart.cart,
  cartTotal: state.cart.total,
});

export default connect(mapStateToProps)(CartList);
