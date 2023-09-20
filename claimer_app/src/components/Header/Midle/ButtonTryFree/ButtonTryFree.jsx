import React from 'react';
import style from './ButtonTryFree.module.css';
import logoImage from '../../../../images/button_try_free.svg'
const ButtonTryFree = () => {
    return (
        <div className={style.button_try_free}>
            <img src={logoImage} alt="Логотип" />
        </div>
    );
}
export default ButtonTryFree;