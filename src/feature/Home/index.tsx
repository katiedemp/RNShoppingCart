import { Layout } from '@ui-kitten/components';
import React from 'react';
import { Text } from 'react-native';
import ProductList from '../../components/ProductList';
import styles from './style';

const Home = () => {
  return (
    <Layout style={styles.container}>
      <Layout style={styles.list}>
        <ProductList />
      </Layout>
      <Layout style={styles.bottom}>
        <Text>Bottom</Text>
      </Layout>
    </Layout>
  );
};

export default Home;
