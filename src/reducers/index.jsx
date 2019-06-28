import productReducer from './products.jsx';
import cartReducer from './cart.jsx';
//import {combineReducers} from 'redux';
//without combineReducers, instead using initialState to combine two reducers

const initialState = () => {
    return {
        products: [],
        cartItems: {}
    }
}

module.exports = (state=initialState(), action) => {
    return {
        products: productReducer(state.products, action),
        cartItems: cartReducer(state.cartItems, action)
    }
}