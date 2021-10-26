import React from "react";
import s from "./Header.module.css";
import { HeaderItem } from "./HeaderItem/HeaderItem";

export const Header = () => {
  return (
    <div className={s.headerWrapper}>
      <div className={s.headerItems}>
        <HeaderItem nameLink={"Home"} />
        <HeaderItem nameLink={"Skills"} />
        <HeaderItem nameLink={"Works"} />
        <HeaderItem nameLink={"Contacts"} />
      </div>
    </div>
  );
};
