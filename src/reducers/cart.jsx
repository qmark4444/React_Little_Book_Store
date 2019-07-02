import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    MODIFY_CART
} from '../actions/types.jsx';

function addToCart(cartItems, id){
    const newCartItems = JSON.parse(JSON.stringify(cartItems));//clone not mutate state
    if(newCartItems[id]) newCartItems[id]++;
    else newCartItems[id] = 1;
    return newCartItems;
}

function removeFromCart(cartItems, id){
    const newCartItems = JSON.parse(JSON.stringify(cartItems));
    delete newCartItems[id];//won't throw exception if id not a property
    return newCartItems;
}

function modifyCart(cartItems, id, value){
    const newCartItems = JSON.parse(JSON.stringify(cartItems));
    newCartItems[id] = value;
    return newCartItems;
}

const reducer = (state = {}, action) => { //the sate = cartItems
    switch(action.type){
        case ADD_TO_CART:
            return addToCart(state, action.productID);
        case REMOVE_FROM_CART:
            return removeFromCart(state, action.id)
		case MODIFY_CART:
            return modifyCart(state, action.id, action.value);
    }
    return state;//default case
};

export default reducer;