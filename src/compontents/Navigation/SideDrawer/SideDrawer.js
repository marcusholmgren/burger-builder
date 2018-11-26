import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';

const sideDrawer = (props) => {
    return (
        <div className={styles.SideDrawer}>
            <Logo height="10%"/>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
    );
}

export default sideDrawer;
