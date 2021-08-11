import { Layout } from '@ui-kitten/components';
import React from 'react';
import { Text } from 'react-native';
import Products from '../../components/Products';
import styles from './style';

const Home = () => {
  return (
    <Layout style={styles.container}>
      <Layout>
        <Products />
      </Layout>
      <Layout style={styles.bottom}>
        <Text>Bottom</Text>
      </Layout>
    </Layout>
  );
};

export default Home;
