import {
    FETCH_PRODUCTS
} from '../actions/types.jsx';

const reducer = (state =[], action) => { //state = products
    switch(action.type){
        case FETCH_PRODUCTS:
            return action.products;
    }
    return state;//default case
};

export default reducer;