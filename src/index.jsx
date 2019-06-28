import React from 'react';
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');
const {createStore} = require('redux');
const reducers = require('./reducers/index.jsx');

const routes = require('./routes.jsx');

//import {products} from './data_models/Product.jsx';//temporary mock sample 
//import {fetchProducts} from "./actions/creators.jsx";

let store = createStore(reducers);

// (products => {
//     console.log('fetch products');
//     store.dispatch(fetchProducts(products)); //using store.dispatch(action) is anti-pattern 
// })(products);
//iIFE to be replaced by fetch

ReactDOM.render(
    (
        <Provider store={store}>
            {routes}
        </Provider>
    ), document.getElementById('content')
)