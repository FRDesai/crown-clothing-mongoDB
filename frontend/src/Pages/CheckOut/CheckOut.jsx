import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./CheckOut.styles.scss";
import { CartContext } from "../../Context/cartContext";
import CheckoutGrid from "../../Components/CheckoutGrid/CheckoutGrid";
import CheckoutTotal from "../../Components/CheckoutTotal/CheckoutTotal";

const CheckOut = () => {
  const { cartItem } = useContext(CartContext);
  console.log(cartItem);

  const navigate = useNavigate();
  const shop = () => {
    navigate("/shop");
  };
  return (
    <>
      {cartItem.length > 0 ? (
        <div className="checkout-container">
          <CheckoutGrid CheckoutItemsArray={cartItem} />
          <CheckoutTotal />
        </div>
      ) : (
        <div className="empty-cart">
          <div>Your cart is empty</div>
          <div>
            You can browse the shop by
            <span
              className="link"
              onClick={() => {
                shop();
              }}
            >
              clicking here
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckOut;
