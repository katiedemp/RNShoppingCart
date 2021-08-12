import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { addToCart } from '../redux/actions/cartActions';
import { fetchProducts } from '../redux/actions/productAction';
import Item from './Item';
import { connect } from 'react-redux';

interface ProductProps {
  title?: string;
  products?: any;
  fetchProducts?: any;
  addToCart?: any;
}

interface ProductsState {}

class ItemList extends Component<ProductProps, ProductsState> {
  renderItem = ({ item }: { item: any }) => (
    <Item item={item} addItemsToCart={this.addItemsToCart} product={item} />
  );

  constructor(props: {}) {
    super(props);
  }

  componentDidMount = () => {
    this.props.fetchProducts();
  };
  addItemsToCart = (product: any) => {
    this.props.addToCart(product);
  };

  render() {
    const { title, products } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList data={products} renderItem={this.renderItem} keyExtractor={(item) => item.name} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 14,
  },
});
const mapStateToProps = (state: { products: { items: any } }) => ({
  products: state.products.items,
});
export default connect(mapStateToProps, { addToCart, fetchProducts })(ItemList);
