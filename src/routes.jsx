import React from 'react';
const ReactDOM = require('react-dom');

const {
    withRouter 
} = require('react-router');

const {
    BrowserRouter,
    Route,
    Switch
} = require('react-router-dom');

const Layout = withRouter(require('./components/Layout.jsx'));
const Index = require('./components/Index.jsx');
const Product = require('./components/Product.jsx');
const Cart = require('./components/Cart.jsx');
const Checkout = require('./components/Checkout.jsx');

module.exports = (
    <BrowserRouter>
        <div>
            <Layout>
                <Switch>
                    <Route path="/" exact component={(props) => <Index {...props}/>} />
                    <Route path='/products/:id' component={(props) => <Product {...props}/>} />
                    <Route path='/cart' component={(props) => <Cart {...props}/>} />
                </Switch>
            </Layout>
            <Switch>
                <Route path='/checkout' component={(props) => <Checkout {...props}/>} />
            </Switch>
        </div>
    </BrowserRouter>
)