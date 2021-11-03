import React from "react";
import s from "./MySkills.module.css";
import react from "../../assets/Image/react.svg";
import js from "../../assets/Image/js.png";
import htcs from "../../assets/Image/htmlCss.png";

export const MySkills = () => {
  return (
    <div className={s.mainWrapper}>
      <h2 className={s.title}>My skills</h2>
      <div className={s.container}>
        <div className={s.item}>
          <img className={s.imgSkill} src={htcs} />
          <div className={s.titleSkill}>HTML / CSS</div>
          <div className={s.subTitleSkill}>More...</div>
        </div>
        <div className={s.item}>
          <img className={s.imgSkill} src={js} />
          <div className={s.titleSkill}>JavaScript</div>
          <div className={s.subTitleSkill}>More...</div>
        </div>
        <div className={s.item}>
          <img className={s.imgSkill} src={react} />
          <div className={s.titleSkill}>React</div>
          <div className={s.subTitleSkill}>More...</div>
        </div>
      </div>
    </div>
  );
};
