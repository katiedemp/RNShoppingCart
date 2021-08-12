import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const middleware = [thunk];
const initialState = {};

export const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));
export const persistor = persistStore(store);
