import React from "react";
import classes from "./Square.module.css";

import ModuleWrapper from "./components/ModuleWrapper.jsx";

const Square = () => {
  return (
    <div className={classes.square}>
      {/* <div className={classes.content}>
        <div className={classes.text}>
          <p>Определение запросов</p>
        </div>

        <div className={classes.image}>
          <img src={Image} alt="LogoLaptop" />
        </div>

        <div className={classes.description}>
          <p>
            Описывайте произошедшую с вами ситуацию в чате и на основе вашего
            запроса будет предложено составление определенного юридического
            документа, который вы сможете скачать или отправить.
          </p>
        </div>
      </div> */}

      <div className={classes.columnR}>
        <ModuleWrapper />
      </div>
      <div style={{ width: "10px" }}></div>
      <div className={classes.columnR}>
        <p>
          Описывайте произошедшую с вами ситуацию в чате и на основе вашего
          запроса будет предложено составление определенного юридического
          документа, который вы сможете скачать или отправить.
        </p>
      </div>
    </div>
  );
};
export default Square;
