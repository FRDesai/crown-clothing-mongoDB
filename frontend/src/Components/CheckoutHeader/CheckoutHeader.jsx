import React from "react";
import "./CheckoutHeader.styles.scss";
const CheckoutHeader = () => {
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block-product">
          <span>Product</span>
        </div>
        <div className="header-block-description">
          <span>Description</span>
        </div>
        <div className="header-block-price">
          <span>Price</span>
        </div>
        <div className="header-block-quantity">
          <span>Quantity</span>
        </div>

        <div className="header-block-remove">
          <span>Remove</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutHeader;
