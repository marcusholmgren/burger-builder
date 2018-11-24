import React from "react";
import './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <>
        <Toolbar/>
        <main className="content">
            {props.children}
        </main>
    </>
);

export default layout;
