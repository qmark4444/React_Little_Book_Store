import React from 'react';
const {Link} = require('react-router-dom');
import {connect} from "react-redux";
import {removeFromCart} from '../actions/creators.jsx';

class Cart extends React.Component {
    constructor(props){
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(e){
        this.props.removeFromCart(e.target.id);
    }

    render(){
        return (
            <div>
                {/* <h1>Test Cart</h1> */}
                <table>
                    <thead>
                        <tr>
                            <th>
                                Title
                            </th>
                            <th>
                                Quantity
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            Object.keys(this.props.cartItems).map(
                                productID => (
                                    <tr key={productID}>
                                        <td>
                                            {this.props.products[productID].title}
                                        </td>
                                        <td onClick={this.handleRemove} id={productID}>
                                            {this.props.cartItems[productID]}
                                        </td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                    
                </table>

                <Link to="/checkout" className="btn btn-primary" >
                    Checkout
                </Link>

                <Link to="/" className="btn btn-info">
                    Home
                </Link> 

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cartItems: state.cartItems,
        products: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id))
    }
}//or use shorthand: https://react-redux.js.org/api/connect

module.exports = connect(mapStateToProps, mapDispatchToProps)(Cart);