import React, { useState, useEffect } from "react";
import "./Address.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAddressFromPincode } from "../../Slices/pincodeSlice";

const Address = () => {
  const [value, setValue] = useState(0);
  const stateName = useSelector((state) => state.pincode.stateName);
  const cityName = useSelector((state) => state.pincode.city);

  const dispatch = useDispatch();

  const handleChange = (value) => {
    setValue(value);
  };

  useEffect(() => {
    if (value.length === 6) {
      handleGetAddress();
    }
  },[value]);

  const handleGetAddress = () => {
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
            // value={value}
            onChange={(e) => {
              handleChange(e.target.value);
            }}
            max="6"
            min="6"
          />
          <input
            type="text"
            placeholder="Address(House No, Building, Street, Area)"
          />
          <input type="text" placeholder="Locality/Town" />
          <input className="disable" name="city" value={cityName} disabled />
          <input className="disable" name="state" value={stateName} disabled />
        </div>
      </div>
      <div className="address-inner-container">
        <button className="address-btn">Add Address</button>
      </div>
    </div>
  );
};

export default Address;
