import React from 'react';
import { Button, Icon } from '@ui-kitten/components';
import Home from '../feature/Home';
import { SafeAreaView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../navigations/NavigatorMain';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamsList,
  'Cart'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const LeftIcon = () => <Icon name="arrow-ios-back-outline" />;

function ShoppingCartScreen({ navigation }: Props) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          onPress={() => navigation.goBack()}
          appearance="ghost"
          status="control"
          accessoryLeft={LeftIcon}
          size="large">
          Back
        </Button>
      ),
    });
  }, [navigation]);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{ flex: 1, flexDirection: 'column', width: '100%' }}>
      <Home />
    </SafeAreaView>
  );
}

export default ShoppingCartScreen;
