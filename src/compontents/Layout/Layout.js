import React from "react";
import './Layout.css'

const layout = (props) => (
    <>
        <div className="content">Toolbar, SideDrawer, Backgrop</div>
        <main>
            {props.children}
        </main>
    </>
);

export default layout;
