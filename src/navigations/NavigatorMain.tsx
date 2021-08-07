import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';

export type RootStackParamsList = {
  Home: undefined;
  Cart: undefined;
};

const MainStack = createStackNavigator<RootStackParamsList>();

const NavigatorMain = (): React.ReactElement => (
  <MainStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#3366FF',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <MainStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Home',
      }}
    />
    <MainStack.Screen
      name="Cart"
      component={ShoppingCartScreen}
      options={{
        title: 'Shopping Cart',
      }}
    />
  </MainStack.Navigator>
);

export default NavigatorMain;
