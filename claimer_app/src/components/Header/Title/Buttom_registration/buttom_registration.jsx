import React from 'react';
import classes from './buttom_registration.module.css';
import logoImage from '../../../../images/buttom_reg.svg'
const ButtomRegistration = () => {
    return (
        <div className={classes.buttom_registration}>
            <img src={logoImage} alt="Логотип" />
        </div>
    );
}
export default ButtomRegistration;