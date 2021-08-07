import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from '@ui-kitten/components';

class Cart extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Cart</Text>
            </View>
        )
    }
};

export default Cart;
