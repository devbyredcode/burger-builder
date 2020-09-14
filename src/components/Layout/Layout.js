import React from 'react';
import Auxillary from '../Hoc/Auxillary';
import classes from './Layout.css';

const layout = (props) => (
    <Auxillary>
        <div>
            Toolbar, Side Drawer, Backdrop
        </div>
        <main className={classes.content}>
            { props.children }
        </main>
    </Auxillary>
);

export default layout;