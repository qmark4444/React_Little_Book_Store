import React from 'react';
const {Link} = require('react-router-dom');
import {connect} from "react-redux";
import {removeFromCart, modifyCart} from '../actions/creators.jsx';

class Cart extends React.Component {
    constructor(props){
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
		this.handleModify = this.handleModify.bind(this);
    }

    handleRemove(e){
        this.props.removeFromCart(e.target.id);
    }
	
	handleModify(e){
        let id = e.target.id.substring(2);
        this.props.modifyCart(id, e.target.value);
    }

    render(){
        return (
            <div>
                {/* <h1>Test Cart</h1> */}
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>
                                Title
                            </th>
                            <th>
                                Quantity
                            </th>
							<th>
                                Remove
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
                                        <td>
                                            <input type="number" min="1" value={this.props.cartItems[productID]} 
												onChange={this.handleModify} id={"q_" + productID} />
                                        </td>
                                        <td>
                                            <i className="fa fa-trash" onClick={this.handleRemove} id={productID} ></i>
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
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        modifyCart: (id, value) => dispatch(modifyCart(id, value))
    }
}//or use shorthand: https://react-redux.js.org/api/connect

module.exports = connect(mapStateToProps, mapDispatchToProps)(Cart);