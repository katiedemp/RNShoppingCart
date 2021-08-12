import { FETCH_PRODUCTS } from '../actions/types';
const initialState = {
  items: [],
};
export default function (state = initialState, action: { type: any; payload: any }) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}
