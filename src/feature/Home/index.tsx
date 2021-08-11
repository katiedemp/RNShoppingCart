import { Layout } from '@ui-kitten/components';
import React from 'react';
import { Text } from 'react-native';
import ItemList from '../../components/ItemList';
import styles from './style';

const Home = () => {
  return (
    <Layout style={styles.container}>
      <Layout style={styles.list}>
        <ItemList title={'Product List'} />
      </Layout>
      <Layout style={styles.bottom}>
        <Text>Bottom</Text>
      </Layout>
    </Layout>
  );
};

export default Home;
