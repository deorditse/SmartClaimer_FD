import React from 'react';
import style from './button_login.module.css';
import logoImage from '../../../../images/button_login.svg'
const ButtonLogin = () => {
    return (
        <div className={style.button_login}>
            <img src={logoImage} alt="Логотип" />
        </div>
    );
}
export default ButtonLogin;