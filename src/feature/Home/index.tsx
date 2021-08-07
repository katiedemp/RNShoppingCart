import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import styles from './style';
import { Component } from 'react';
import { products } from '../../../Data';
import Products from '../../components/Products';

class Home extends Component {
  render() {
    return (
      <Layout style={styles.container}>
        <Layout style={styles.top}>
          <Text>Products Top</Text>
          <Products products={products} />
        </Layout>
        <Layout style={styles.bottom} />
        <Layout style={styles.bottom}>
          <Text>Bottom</Text>
        </Layout>
      </Layout>
    );
  }
}

export default Home;
