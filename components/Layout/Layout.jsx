import React from 'react';

import classes from "../../style/layout.module.css";

const Layout = ({children,biggerspacing}) => {
    return (
        <div className={`${!!biggerspacing ? classes["secondaryLayout--EL"] : classes["mainLayout--EL"]}`}>
            {children}
        </div>
    )
}

export default Layout;
