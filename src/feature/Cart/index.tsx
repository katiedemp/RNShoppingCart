import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { Component } from 'react';
import { Alert, Button } from 'react-native';
import { connect } from 'react-redux';
import CartList from '../../components/CartList';
import styles from './style';

interface CartProps {
  title?: string;
  cartItems: any;
  cartTotal: number;
}

interface CartState {}

export class Cart extends Component<CartProps, CartState> {
  onPress = () => {
    Alert.alert('Checked out');
  };

  render() {
    const { cartItems, cartTotal } = this.props;
    return (
      <Layout style={styles.container}>
        <Layout style={styles.list}>
          <CartList title={'Cart'} cartItems={cartItems} cartTotal={cartTotal} />
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

export default connect(mapStateToProps)(Cart);
