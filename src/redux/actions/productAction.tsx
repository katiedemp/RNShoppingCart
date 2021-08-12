import { getProducts } from '../../../data';
import { FETCH_PRODUCTS } from './types';

export const fetchProducts = () => (dispatch: (arg0: { type: string; payload: any }) => void) => {
  const products = getProducts();
  dispatch({
    type: FETCH_PRODUCTS,
    payload: products,
  });
};
