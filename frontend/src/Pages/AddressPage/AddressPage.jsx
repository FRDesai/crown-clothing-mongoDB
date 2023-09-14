import React from "react";
import CheckoutTotal from "../../Components/CheckoutTotal/CheckoutTotal";
import Address from "../../Components/Address/Address";
import "./AddressPage.styles.scss";

const AddressPage = () => {
  return (
    <div className="address">
      <Address />
      <CheckoutTotal />
    </div>
  );
};

export default AddressPage;
