import React, { useContext } from "react";
import "./CartIcon.styles.scss";
import { ReactComponent as ShoppingBag } from "../../Assets/Images/shopping-bag.svg";
import CartDropdown from "../CartDropdown/CartDropdown";
import { CartContext } from "../../Context/cartContext";

const CartIcon = () => {
  const { CartVisible, setCartVisible, cartItem } = useContext(CartContext);

  const handleCartdropdown = () => {
    setCartVisible(!CartVisible);
  };
  return (
    <>
      <div onClick={handleCartdropdown} className="shopping-icon-container">
        <ShoppingBag className="shopping-icon" />
        <span className="item-count">{Object.keys(cartItem).length}</span>
      </div>
      {CartVisible && <CartDropdown />}
    </>
  );
};

export default CartIcon;
