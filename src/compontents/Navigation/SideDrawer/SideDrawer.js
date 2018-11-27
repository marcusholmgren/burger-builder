import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
    let attachedClasses = [styles.SideDrawer, styles.Close];
    if (props.open) {
        attachedClasses = [styles.SideDrawer, styles.Open];
    }
    return (
        <>
            <Backdrop
                show={props.open}
                clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <Logo height="10%"/>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </>
    );
}

export default sideDrawer;
