import React from "react";
import { menuItems } from "../data.js";

export const MenuContent = () => {
  return (
    <ul className="menu">
      {menuItems.map((item, key) => (
        <li key={key}>
          <div className="plate">
            <img
              src={`/images/${item.image}`}
              alt={item.alt}
              className="plate"
            />
          </div>
          <div className="content">
            <p className="menu-item">{item.name}</p>
            <p className="price">£{item.price}</p>
            <button className="in-cart">
              <img src="/images/check.svg" alt="Check" />
              Add to Cart
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
