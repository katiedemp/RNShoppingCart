import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import cartReducer from './cartReducer';
import productReducer from './productReducer';

export const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export default combineReducers({
  products: persistReducer(persistConfig, productReducer),
  cart: persistReducer(persistConfig, cartReducer),
});
