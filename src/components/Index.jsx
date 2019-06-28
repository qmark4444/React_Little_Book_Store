import React from 'react';
const {Link} = require('react-router-dom');
import {connect} from 'react-redux';

import {products} from '../data_models/Product.jsx'; //temporary mock sample
import {fetchProducts} from "../actions/creators.jsx";

class Index extends React.Component {
    componentDidMount(){
        //fetch products? do it here or before here (parent Route)
        this.props.fetchProducts(products);
    }

    render(){
        const {products} = this.props;//destructuring

        return (
            <div>
                {/* <h1>Test Index</h1> */}
                <p>
                    <Link to='/cart' className="btn btn-danger">
                        CART
                    </Link>
                </p>
                <div>
                    {
                        products.map( product => (
                            <Link key={product.id} to={{
                                    pathname: `/products/${product.id}`, 
                                    state: {
                                        modal: true,
                                        returnto: this.props.location.pathname
                                    }
                                }}>
                                <img style={{margin: 10}} src={product.src} height='100' />
                            </Link>
                        ))
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = {
    //fetchProducts: fetchProducts
    fetchProducts//shorthand
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Index);