import React from "react";
import { CartContent } from "../components/CartContent";

export const Cart = () => {
  return (
    <div className="panel cart">
      <h1>Your Cart</h1>
      <p className="empty">Your cart is empty.</p>
      <CartContent />
      
    </div>
  );
};
