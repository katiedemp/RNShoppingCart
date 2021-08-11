import { FETCH_PRODUCTS } from './types';
import { getProducts } from '../../../data';

export const fetchProducts = () => (dispatch: (arg0: { type: string; payload: any; }) => void) => {
  const products = getProducts();
  dispatch({
    type: FETCH_PRODUCTS,
    payload: products,
  });
};
