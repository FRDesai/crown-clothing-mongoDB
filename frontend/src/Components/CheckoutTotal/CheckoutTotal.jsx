import React, { useContext } from "react";
import "./Checkout.styles.scss";
import { CartContext } from "../../Context/cartContext";

const CheckoutTotal = () => {
  const { totalPrice } = useContext(CartContext);
  return (
    <div className="checkout-total-container">
      <div>Total price: {totalPrice}</div>
    </div>
  );
};

export default CheckoutTotal;
