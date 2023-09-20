import React from 'react';
import classes from './ImageMagician.module.css';
import logoImage from '../../../../images/image_magician.svg'
const ImageMagician = () => {
    return (
        <div className={classes.image_magician}>
            <img src={logoImage} alt="Логотип" />
        </div>
    );
}
export default ImageMagician;