import React from "react";
import { CartContent } from "../components/CartContent";

export const Cart = () => {
  return (
    <div className="panel cart">
      <h1>Your Cart</h1>
      <p className="empty">Your cart is empty.</p>
      <CartContent />
      <div className="totals">
        <div className="line-item">
          <div className="label">Subtotal:</div>
          <div className="amount price subtotal">$10.80</div>
        </div>
        <div className="line-item">
          <div className="label">Tax:</div>
          <div className="amount price tax">$1.05</div>
        </div>
        <div className="line-item total">
          <div className="label">Total:</div>
          <div className="amount price total">$11.85</div>
        </div>
      </div>
    </div>
  );
};
