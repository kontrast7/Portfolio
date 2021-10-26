import React from "react";
import s from "./HeaderItem.module.css";

export const HeaderItem = (props) => {
  return <div className={s.item}>{props.nameLink}</div>;
};
