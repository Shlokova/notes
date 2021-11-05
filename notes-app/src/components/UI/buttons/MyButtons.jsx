import React from 'react';
import classes from './MyButtons.module.css'

const MyButtons = ({children,  ...props}) => {
    return (
        <button className={classes.myBtn} {...props}>
            {children}
        </button>
    );
};

export default MyButtons;