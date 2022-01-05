import React, {useState} from "react";
import { menuItems } from "../data.js";
import { MenuItem } from "./MenuItem.jsx";

export const MenuContent = () => {

  return (
    <ul className="menu">
      {menuItems.map((item, key) => (
        <MenuItem item={item} key={key}/>
      ))}
    </ul>
  );
};
