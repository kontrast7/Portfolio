import React from "react";
import s from "./Main.module.css";
import avatar from "../../assets/Image/unnamed.jpg";

export const MainLadder = () => {
  return (
    <div className={s.mainWrapper}>
        <div className={s.flexContainer}>
        <div className={s.nameContainer}>
        <div className={s.perspectiveText}>

          <div className={s.perspectiveLine}>
            <div className={s.p}/>
            <div className={s.p}>Hi!</div>
          </div>

        <div className={s.perspectiveLine}>
            <div className={s.p}>Hi!</div>
            <div className={s.p}>My name Maks Mashko</div>
          </div>

        <div className={s.perspectiveLine}>
            <div className={s.p}>My name Maks Mashko</div>
            <div className={s.p}>I am a</div>
          </div>

        <div className={s.perspectiveLine}>
            <div className={s.p}>I am a</div>
            <div className={s.p}>front-end developer</div>
          </div>

        <div className={s.perspectiveLine}>
            <div className={s.p}>front-end developer</div>
            <div className={s.p}/>
          </div>
        </div>
        </div>

        <div>
          <img className={s.avatar} src={avatar} />
        </div>
        </div>
    </div>
  );
};
