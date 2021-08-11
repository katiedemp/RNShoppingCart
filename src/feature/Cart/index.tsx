import { Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { Alert, Button } from 'react-native';
import CartList from '../../components/CartList';
import styles from './style';

const Cart = () => {
  // if(this.state.value == 'empty')
  //   return <Text>No items to show</Text>;
  const onPress = () => {
    Alert.alert('Checked out');
  };

  return (
    <Layout style={styles.container}>
      <Layout style={styles.list}>
        <CartList title={'Cart'} />
      </Layout>
      <Layout style={styles.bottom}>
        <Layout style={styles.hairline} />
        <Button title="Checkout" onPress={onPress} />
      </Layout>
    </Layout>
  );
};

export default Cart;
