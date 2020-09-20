import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>
            <DrawerToggle clicked={props.drawerToggleClicked}/>
        </div>
        <div><Logo/></div>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;