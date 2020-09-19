import React from 'react';
import classes from './Modal.css'
import Auxillary from '../../Hoc/Auxillary';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Auxillary>
        <Backdrop 
            clicked={props.modalClose}
            show={props.show}/>
        <div 
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '00'
            }}>
            {props.children}
        </div>
    </Auxillary>
)

export default modal;