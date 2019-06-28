import {
    ADD_TO_CART,
    REMOVE_FROM_CART
} from '../actions/types.jsx';

function addToCart(cartItems, id){
    if(cartItems[id]) cartItems[id]++;
    else cartItems[id] = 1;
    return cartItems;
}

function removeFromCart(cartItems, id){
    delete cartItems[id];//won't throw exception if id not a property
    return cartItems;
}

const reducer = (state = {}, action) => { //the sate = cartItems
    switch(action.type){
        case ADD_TO_CART:
            return addToCart(state, action.productID);
        case REMOVE_FROM_CART:
            return removeFromCart(state, action.id)
    }
    return state;//default case
};

export default reducer;