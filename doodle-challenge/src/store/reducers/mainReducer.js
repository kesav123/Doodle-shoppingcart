import productReducer from './productReducer';
import cartReducer from './cartReducer';
import { combineReducers } from 'redux';

const mainReducer = combineReducers({
    product: productReducer,
    cart: cartReducer
});
export default mainReducer;