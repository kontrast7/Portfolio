import React from "react";
import s from "./Main.module.css";
import avatar from "../../assets/Image/unnamed.jpg";

export const Main = () => {
  return (
    <div className={s.mainWrapper}>
      <div className={s.container}>
        <h1 className={s.homeTitle}>
          <span>Hi! My name Maks Mashko</span>
          <span>I'm a front-end developer</span>
        </h1>
        <div>
          <img className={s.avatar} src={avatar} />
        </div>
      </div>
    </div>
  );
};
