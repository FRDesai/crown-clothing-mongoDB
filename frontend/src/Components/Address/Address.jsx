import React, { useState } from "react";
import "./Address.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAddressFromPincode } from "../../Slices/pincodeSlice";

const Address = () => {
  const [value, setValue] = useState();
  const stateName = useSelector((state) => state.pincode.stateName);
  const cityName = useSelector((state) => state.pincode.city);

  const dispatch = useDispatch();

  const handleChange = (value) => {
    setValue(value);
  };

  const handleGetAddress = () => {
    // Dispatch the action to fetch the address based on the pincode
    dispatch(getAddressFromPincode(value));
  };

  return (
    <div className="address-container">
      <div className="address-inner-container">
        <p>Contact</p>
        <div className="input-container">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Contact" />
        </div>
      </div>
      <div className="address-inner-container">
        <p>Address</p>
        <div className="input-container">
          <input
            type="text"
            placeholder="Pincode"
            value={value}
            onChange={(e) => {
              handleChange(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Address(House No, Building, Street, Area)"
            onClick={handleGetAddress}
          />
          <input type="text" placeholder="Locality/Town" />
          <input name="city" value={cityName} disabled />
          <input name="state" value={stateName} disabled />
        </div>
      </div>
      <div className="address-inner-container">
        <button className="address-btn">Add Address</button>
      </div>
    </div>
  );
};

export default Address;
