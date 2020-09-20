import React, { Component } from 'react';
import classes from './Modal.css'
import Auxillary from '../../Hoc/Auxillary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.show !== this.props.show){
            return true
        }else{
            return false
        }
    }

    componentWillUpdate(){
        console.log('[Modal] Component Will Update');
    }

    render(){
        return(
            <Auxillary>
                <Backdrop 
                    clicked={this.props.modalClose}
                    show={this.props.show}/>
                <div 
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '00'
                    }}>
                    {this.props.children}
                </div>
            </Auxillary>
        )
    }
}

export default Modal;