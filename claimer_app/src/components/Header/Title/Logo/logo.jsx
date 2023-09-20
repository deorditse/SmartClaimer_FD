import React from 'react';
import classes from './logo.module.css';
import logoImage from '../../../../images/logosber.svg'
const Logo = () => {
    return (
        <div className={classes.logo}>
            <img src={logoImage} alt="Логотип" />
        </div>
    );
}
export default Logo;