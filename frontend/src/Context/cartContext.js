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

  const decreaseItem = (item) => {
    if (item.quantity > 0) {
      item.quantity -= 1;
      setCartItem({ ...cartItem, [item.id]: item });
    }
    // else {
    //   item.quantity = ;
    //   setCartItem({ ...cartItem, [item.id]: item });
    // }
  };

  const totalQuantity = Object.values(cartItem).reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const totalPrice = Object.values(cartItem).reduce(
    (accumulator, currentItem) => {
      const subtotal = currentItem.price * currentItem.quantity;
      return accumulator + subtotal;
    },
    0
  );

  const value = {
    CartVisible,
    setCartVisible,
    cartItem,
    setCartItem,
    addItem,
    totalQuantity,
    totalPrice,
    decreaseItem,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
