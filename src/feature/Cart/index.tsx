import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { Component } from 'react';
import { Alert, Button } from 'react-native';
import { connect } from 'react-redux';
import CartList from '../../components/CartList';
import styles from './style';
import { emptyCart } from '../../redux/actions/cartActions';

interface CartProps {
  title?: string;
  cartItems: any;
  cartTotal: number;
  emptyCart: any;
}

interface CartState {}

export class Cart extends Component<CartProps, CartState> {
  onPress = () => {
    const { emptyCart } = this.props;
    Alert.alert('Checked out');
    emptyCart();
  };

  render() {
    const cartListProps = {
      title: 'Cart',
      cartItems: this.props.cartItems,
      cartTotal: this.props.cartTotal,
    };

    return (
      <Layout style={styles.container}>
        <Layout style={styles.list}>
          <CartList {...cartListProps} />
        </Layout>
        <Layout style={styles.bottom}>
          <Layout style={styles.hairline} />
          <Button title="Checkout" onPress={this.onPress} />
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state: { cart: { cart: any; total: any } }) => ({
  cartItems: state.cart.cart,
  cartTotal: state.cart.total,
});

export default connect(mapStateToProps, {emptyCart})(Cart);
