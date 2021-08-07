import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import styles from './style';

const Home = (): React.ReactElement => {
  return (
    <Layout style={styles.container}>
      <Layout style={styles.top}>
        <Text>Products Top</Text>
      </Layout>
      <Layout style={styles.bottom} />
      <Layout style={styles.bottom}>
        <Text>Bottom</Text>
      </Layout>
    </Layout>
  );
};

export default Home;
