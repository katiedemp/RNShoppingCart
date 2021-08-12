import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Swipeout from 'react-native-swipeout';
import { connect } from 'react-redux';
import { removeItem } from '../redux/actions/cartActions';

interface CartProps {
  item: { id: number; name: string; price: number; qty: number; total: number };
  index: any;
  buttonTitle: string;
  removeItem?: any;
}

interface CartState {}

class CartItem extends Component<CartProps, CartState> {
  state = {
    activeRowKey: null,
  };

  render() {
    const { item, index, buttonTitle } = this.props;
    const swipeSettings = {
      autoClose: true,
      onClose: (sectionId: number, rowId: number, direction: string) => {
        this.setState({ activeRowKey: null });
      },
      onOpen: (sectionId: number, rowId: number, direction: string) => {
        this.setState({ activeRowKey: this.props.item.id });
      },
      right: [
        {
          onPress: () => {
            const deleteRow = this.state.activeRowKey;
            Alert.alert(
              'Hey!',
              'Are you sure you want to delete?',
              [
                { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                {
                  text: 'Yes',
                  onPress: () => {
                    this.props.removeItem({ index: this.props.index, item: this.props.item });
                  },
                },
              ],
              { cancelable: true }
            );
          },
          text: 'Delete',
          type: 'delete',
        },
      ],
      rowId: this.props.index,
      sectionId: 1,
    };

    return (
      <View style={styles.item}>
        <Swipeout {...swipeSettings}>
          <View style={styles.item}>
            <Text style={styles.name}>{item.name} </Text>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            <Text style={styles.price}>Qty: {item.qty}</Text>
            <Text style={styles.price}>Total ${item.total.toFixed(2)}</Text>
          </View>
        </Swipeout>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    padding: 10,
    textAlign: 'right',
  },
});

export default connect(null, { removeItem })(CartItem);
