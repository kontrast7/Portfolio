import React from "react";
import s from "./Main.module.css";
import avatar from "../../assets/Image/unnamed.jpg";

export const Main = () => {
  return (
    <div className={s.mainWrapper}>
      <div className={s.container}>
        <div className={s.mainInfo}>
          <h3 className={s.item}>Hi!</h3>
          <h3 className={s.item}>My name  is</h3>
          <h3 className={s.item}>Max Mashko</h3>
          <h3 className={s.item}>I am a front-end developer</h3>
        </div>

        <div>
          <img className={s.avatar} src={avatar} />
        </div>
      </div>
    </div>
  );
};
