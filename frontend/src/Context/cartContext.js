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
  const removeItem = (item) => {
    // Use the filter function to create a new array without the item to be removed
    const updatedCart = Object.values(cartItem).filter(
      (cartItem) => cartItem.id !== item.id
    );

    // Update the cart with the new array
    setCartItem(updatedCart);
  };
  
  const decreaseItem = (item) => {
    if (item.quantity > 0) {
      item.quantity -= 1;
      setCartItem({ ...cartItem, [item.id]: item });
    } else if (item.quantity === 1) {
      removeItem(item);
    }
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
    removeItem,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
