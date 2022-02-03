import React from "react";
import { Totals } from "./Totals";

export const CartContent = () => {
   
  return (
    <>
      <ul className="cart-summary">
        {/* <!-- item 1 --> */}
        <li>
          <div className="plate">
            <img
              src="images/plate__fish-sticks-fries.png"
              alt="Fish Sticks and Fries"
              className="plate"
            />
            <div className="quantity">1</div>
          </div>
          <div className="content">
            <p className="menu-item">Fish Sticks and Fries</p>
            <p className="price">$6.34</p>
          </div>
          <div className="quantity__wrapper">
            <button className="decrease">
              <img src="images/chevron.svg" />
            </button>
            <div className="quantity">1</div>
            <button className="increase">
              <img src="images/chevron.svg" />
            </button>
          </div>
          <div className="subtotal">$6.34</div>
        </li>

        {/* <!-- item 2 --> */}
        <li>
          <div className="plate">
            <img
              src="images/plate__french-fries.png"
              alt="French Fries"
              className="plate"
            />
            <div className="quantity">2</div>
          </div>
          <div className="content">
            <p className="menu-item">French Fries with Ketchup</p>
            <p className="price">$2.23</p>
          </div>
          <div className="quantity__wrapper">
            <button className="decrease">
              <img src="images/chevron.svg" />
            </button>
            <div className="quantity">2</div>
            <button className="increase">
              <img src="images/chevron.svg" />
            </button>
          </div>
          <div className="subtotal">$4.46</div>
        </li>
      </ul>
      <Totals />
    </>
    
  );
};
