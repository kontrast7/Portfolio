import React from "react";
import s from "./MyWorks.module.css";

export const MyWorks = () => {
  return (
    <div className={s.mainWrapper}>
      <h2 className={s.title}>My works</h2>
      <div className={s.container}>
        <div className={s.item}>
          <img className={s.imgSkill}  />
          <div className={s.titleSkill}>HTML / CSS</div>
          <div className={s.subTitleSkill}>Name</div>
          <div className={s.subTitleSkill}>More...</div>
        </div>
        <div className={s.item}>
          <img className={s.imgSkill}  />
          <div className={s.titleSkill}>JavaScript</div>
          <div className={s.subTitleSkill}>Name</div>
          <div className={s.subTitleSkill}>More...</div>
        </div>

      </div>
    </div>
  );
};
