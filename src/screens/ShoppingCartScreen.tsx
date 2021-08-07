import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Icon, Layout } from '@ui-kitten/components';
import React from 'react';
import { SafeAreaView } from 'react-native';
import Cart from '../feature/Cart';
import { RootStackParamsList } from '../navigations/NavigatorMain';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamsList, 'Cart'>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const LeftIcon = () => <Icon name="arrow-ios-back-outline" />;

const ShoppingCartScreen = ({ navigation }: Props): React.ReactElement => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          onPress={() => navigation.goBack()}
          appearance="ghost"
          status="control"
          accessoryLeft={LeftIcon}
          size="large"
        >
          Back
        </Button>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, flexDirection: 'column', width: '100%' }}>
        <Cart />
      </Layout>
    </SafeAreaView>
  );
};

export default ShoppingCartScreen;
