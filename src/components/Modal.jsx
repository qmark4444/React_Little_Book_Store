import React from 'react';
const {Link} = require('react-router-dom');

class Modal extends React.Component {
    constructor(props){
        super(props);
        this.styles = {
            position: 'fixed',
            top: '20%',
            right: '20%',
            bottom: '20%',
            left: '20%',
            width: 450,
            height: 400,
            padding: 20,
            boxShadow: '0px 0px 150px 130px rgba(0, 0, 0, 0.5)',
            overflow: 'auto',
            background: '#fff'
        };
    }

    render(){
        return (
            <div style={this.styles}>
                {/* <h1>Test Modal</h1> */}
                <p>
                    <Link to={this.props.returnto} className="btn btn-primary">
                        BACK
                    </Link>
                </p>
                {this.props.children} {/* Product component children */}
            </div>
        )
    }
}

module.exports = Modal;