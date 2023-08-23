import { createContext } from "react";
import React, { useState } from "react";

export const CartContext = createContext();

export const CartDataProvider = ({ children }) => {
  const [CartVisible, setCartVisible] = useState(false);
  const [cartItem, setCartItem] = useState({});

  const value = {
    CartVisible,
    setCartVisible,
    cartItem,
    setCartItem,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
