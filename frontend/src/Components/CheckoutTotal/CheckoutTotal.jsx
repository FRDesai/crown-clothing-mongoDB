import React, { useContext } from "react";
import "./CheckoutTotal.styles.scss";
import { CartContext } from "../../Context/cartContext";
import { useNavigate } from "react-router-dom";

const CheckoutTotal = () => {
  const navigate = useNavigate();
  const { totalPrice, totalQuantity } = useContext(CartContext);

  const replaceWithAddressComponent = () => {
    navigate("address");
  };

  return (
    <div className="checkout-total-container">
      <div className="checkout-total-card">
        <div className="row">
          <div>Total MRP: </div>
          <div> ${totalPrice}</div>
        </div>
        <div className="row">
          <div>Total quantity: </div>
          <div> {totalQuantity}</div>
        </div>

        <div className="row">
          <div>Delivery fee:</div>
          <div> $20</div>
        </div>

        <hr />
        <div className="row">
          <div> Total Amount: </div>
          <div> ${totalPrice + 20}</div>
        </div>
        <button onClick={() => replaceWithAddressComponent()}>
          Place order
        </button>
      </div>
    </div>
  );
};

export default CheckoutTotal;
