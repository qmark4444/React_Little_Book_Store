import React from 'react';
const Modal = require('./Modal.jsx');

const Heading = (props) => { return (
    <div>
        Current path: {props.location.pathname}
    </div>
)};

class Layout extends React.Component {
    componentWillReceiveProps(newProps){
        this.isModal = newProps.location.state && newProps.location.state.modal;//is it going to be Modal

        //console.log('newProps location key:', newProps.location.key) //not the key in product <Link>
        //console.log('current location key:', this.props.location.key)//undefined --> must use BrowserRouter, not HashRouter

        //if is modal, and new key (product.id) is not the current key (another modal), set prevChildren as current children
        if(this.isModal && newProps.location.key !== this.props.location.key){
            this.prevChildren = this.props.children; 
        }
    }

    componentWillUpdate(newProps, newState){
        console.log('WillUpdate newProps:', newProps);
    }

    render(){
        return (
            <div className="well">
                {/* <h1>Test Layout: `${this.isModal}`</h1> */}
                <Heading {...this.props}/>
                <div>
                    {//the background
                        (this.isModal) ? this.prevChildren : this.props.children
                    }

                    {
                        (this.isModal)?
                        (<Modal isOpen={true} returnto={this.props.location.state.returnto}>
                            {this.props.children}
                        </Modal>) : ('')
                    }
                </div>
            </div>
        )
    }
}

module.exports = Layout;