import React from 'react';
import classes from './ImageMagician.module.css';
import logoImage from '../../../../images/qwe.png'
const ImageMagician = () => {
    return (
        <div className={classes.imageContainer}>
            <img src={logoImage} alt="Логотип" />
        </div>
    );
}
export default ImageMagician;