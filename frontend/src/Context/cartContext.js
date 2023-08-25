import { createContext } from "react";
import React, { useState } from "react";

export const CartContext = createContext();

export const CartDataProvider = ({ children }) => {
  const [CartVisible, setCartVisible] = useState(false);
  const [cartItem, setCartItem] = useState([]);

  const addItem = (item) => {
    if (item.quantity > 0) {
      item.quantity += 1;
      setCartItem({ ...cartItem, [item.id]: item });
    } else {
      item.quantity = 1;
      setCartItem({ ...cartItem, [item.id]: item });
    }
  };

  const totalQuantity = Object.values(cartItem).reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const value = {
    CartVisible,
    setCartVisible,
    cartItem,
    setCartItem,
    addItem,
    totalQuantity,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
