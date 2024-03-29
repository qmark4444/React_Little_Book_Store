import React from 'react';
import {connect} from "react-redux";

class Checkout extends React.Component {
    
    render(){
        let count = 0;
        return (
            <div>
                {/* <h1>Test Checkout</h1> */}
                <table className="table table-bordered">
                    <tbody>
                        {Object.keys(this.props.cartItems).map((item, index, list)=>{
                            count += this.props.cartItems[item]
                            return ( 
                                <tr key={item}>
                                    <td>{this.props.products[item].title}</td>
                                    <td id={"item-quantity-" + this.props.products[item].id}>{this.props.cartItems[item]}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                
                <p>Total: {count}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cartItems: state.cartItems,
        products: state.products
    }
};

const mapDispatchToProps = null;

module.exports = connect(mapStateToProps, mapDispatchToProps)(Checkout);