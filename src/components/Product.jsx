import React from 'react';
const {Link} = require('react-router-dom');
import {connect} from "react-redux";//connect react and redux
import {addToCart} from '../actions/creators.jsx'

class Product extends React.Component {
    constructor(props){
        super(props);
        this.handleBuy = this.handleBuy.bind(this);
    }

    handleBuy(e){
        this.props.addToCart(this.props.match.params.id);//props passed by Route Switch: this.props.match.property
    }

    render(){
        const {params} = this.props.match;

        return (
            <div>
                {/* <h1>Test Product</h1> */}
                <img src={this.props.products[params.id].src} style={{height: '80%', margin: 10}}/>
                <p>
                    {this.props.products[params.id].title}
                </p>
                <p>
                    <Link to={{
                            pathname: '/cart',
                            state: {
                                productId: params.id
                            }
                        }}
                        onClick={this.handleBuy}
                        className="btn btn-primary">
                        BUY
                    </Link>
                </p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Product);