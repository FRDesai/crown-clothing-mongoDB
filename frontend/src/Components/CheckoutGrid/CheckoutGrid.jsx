import React from "react";
import "./CheckoutGrid.styles.scss";
import { ReactComponent as Remove } from "../../Assets/Images/remove.svg";
import { ReactComponent as Next } from "../../Assets/Images/next.svg";
import { ReactComponent as Prev } from "../../Assets/Images/prev.svg";
const CheckoutGrid = ({ CheckoutItemsArray }) => {
  return (
    <div className="checkout-item-container">
      {CheckoutItemsArray.map((checkoutItem) => (
        <>
          <div className="checkout-item-row">
            <img src={checkoutItem.imageUrl} alt={checkoutItem.name} />
            <div className="checkout-item-name">{checkoutItem.name}</div>
            <div>{checkoutItem.price}</div>
            <div className="quantity-container">
              <Prev className="previous-icon" />
              <div>{checkoutItem.quantity}</div>
              <Next className="next-icon" />
            </div>
            <Remove />
          </div>
          <hr />
        </>
      ))}
    </div>
  );
};

export default CheckoutGrid;
