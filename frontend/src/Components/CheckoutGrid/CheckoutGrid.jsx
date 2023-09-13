import React, { useContext } from "react";
import "./CheckoutGrid.styles.scss";
import { ReactComponent as Remove } from "../../Assets/Images/remove.svg";
import { ReactComponent as Increase } from "../../Assets/Images/next.svg";
import { ReactComponent as Decrease } from "../../Assets/Images/prev.svg";
import { CartContext } from "../../Context/cartContext";

const CheckoutGrid = ({ CheckoutItemsArray }) => {
  const { addItem, decreaseItem, removeItem } = useContext(CartContext);
  return (
    <div className="checkout-item-container">
      {CheckoutItemsArray.map((item) => (
        <>
          <div className="checkout-item-row">
            <img src={item.imageUrl} alt={item.name} />
            <div className="checkout-item-name">{item.name}</div>
            <div>{item.price}</div>
            <div className="quantity-container">
              <Decrease
                onClick={() => decreaseItem(item)}
                className="previous-icon"
              />
              <div>{item.quantity}</div>
              <Increase onClick={() => addItem(item)} className="next-icon" />
            </div>
            <Remove onClick={() => removeItem(item)} className="remove-icon" />
          </div>
          {/* <hr /> */}
        </>
      ))}
    </div>
  );
};

export default CheckoutGrid;
