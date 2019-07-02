import {
    FETCH_PRODUCTS,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    MODIFY_CART
} from "./types.jsx";

export const fetchProducts = (products) => {
    return {
        type: FETCH_PRODUCTS,
        products
    }
};

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        productID: id
    }
};

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        id
    }
};

export const modifyCart = (id, value) => {
    return {
        type: MODIFY_CART,
        id,
        value
    }
};