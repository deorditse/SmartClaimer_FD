import React from 'react';
import classes from './button_registration.module.css';
import logoImage from '../../../../images/button_reg.svg'
const ButtomRegistration = () => {
    return (
        <div className={classes.buttom_registration}>
            <img src={logoImage} alt="Логотип" />
        </div>
    );
}
export default ButtomRegistration;