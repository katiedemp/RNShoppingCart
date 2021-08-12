import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from '../actions/types';

const initialState: { cartItems: any[]; total: number } = {
  cartItems: [],
  total: 0,
};

export default function (
  state = initialState,
  action: {
    type: any;
    payload: {
      id: number;
      price: number;
      index: number;
      name: string;
    };
  }
) {
  switch (action.type) {
    case ADD_TO_CART:
      const inCart = state.cartItems.some((x) => x.id === action.payload.id);
      console.log(inCart);
      console.log(state.cartItems);
      if (inCart) {
        // already in cart, shallow copy cart items
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === action.payload.id
              ? {
                  // found item, shallow copy item and update quantity property
                  ...x,
                  qty: x.qty + 1,
                  total: x.total + x.price,
                }
              : x
          ),
          total: state.total + action.payload.price,
        };
      } else {
        return {
          ...state,
          cartItems: [action.payload, ...state.cartItems],
          total: state.total + action.payload.price,
        };
      }
    case EMPTY_CART:
      return {
        ...state,
        cartItems: [],
        total: 0,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item, i) => i !== action.payload.index),
        total: state.total - action.payload.item.price,
      };
    default:
      return state;
  }
}
