import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Icon } from '@ui-kitten/components';
import React from 'react';
import { SafeAreaView } from 'react-native';
import Home from '../feature/Home';
import { RootStackParamsList } from '../navigations/NavigatorMain';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamsList,
  'Home'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const RightIcon = () => <Icon name="arrow-ios-forward-outline" />;

const HomeScreen = ({ navigation }: Props): React.ReactElement => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate('Cart')}
          appearance="ghost"
          status="control"
          accessoryRight={RightIcon}
          size="large">
          Cart
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
};

export default HomeScreen;
