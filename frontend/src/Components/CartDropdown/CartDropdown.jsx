import React, { useContext } from "react";
import Button from "../Button/Button";
import "./CartDropdown.styles.scss";
import { CartContext } from "../../Context/cartContext";

const CartDropdown = () => {
  const { cartItem } = useContext(CartContext);
  const cartItemsArray = Object.values(cartItem);
  console.log("cart in the cartdrop down", cartItem);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-container">
        {cartItemsArray.map((item) => (
          <div className="cart-items">
            <div className="image">
              <img src={item.imageUrl} alt={item.name} />
            </div>
            <div className="name-price-container">
              <div className="name"> {item.name}</div>
              <div className="price">${item.price}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="button-container">
        <Button type="submit">Checkout</Button>
      </div>
    </div>
  );
};

export default CartDropdown;
