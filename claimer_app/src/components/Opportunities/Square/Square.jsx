import React from 'react';
import classes from './Square.module.css'
import Image from '../../../images/laptop.png'
const Square = () => {
    return (
        <div className={classes.square}>
            <div className={classes.content}>

                <div className={classes.text}>
                    <p>Определение запросов</p>
                </div>

                <div className={classes.image}>
                    <img src={Image} alt="LogoLaptop"/>
                </div>

                <div className={classes.description}>
                    <p>Описывайте произошедшую с вами ситуацию в чате и на основе вашего запроса будет предложено составление определенного юридического документа, который вы сможете скачать или отправить.</p>
                </div>

            </div>
        </div>
    );
}
export default Square;