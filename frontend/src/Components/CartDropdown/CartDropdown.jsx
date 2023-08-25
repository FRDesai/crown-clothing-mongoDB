import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "./CartDropdown.styles.scss";
import { CartContext } from "../../Context/cartContext";
import { ReactComponent as Remove } from "../../Assets/Images/remove.svg";

const CartDropdown = () => {
  const { cartItem, setCartVisible } = useContext(CartContext);

  const cartItemsArray = Object.values(cartItem);
  const navigate = useNavigate();

  const CheckOut = () => {
    setCartVisible(false);
    navigate("/checkout");
  };
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
              <div className="price">
                ${item.price} X {item.quantity}
              </div>
            </div>
            <Remove className="remove" />
          </div>
        ))}
      </div>

      <div className="button-container">
        <Button onClick={() => CheckOut()} type="submit">
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartDropdown;
