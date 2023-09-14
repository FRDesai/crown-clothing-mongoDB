import { createContext } from "react";
import React, { useState, useEffect } from "react";

export const CartContext = createContext();

export const CartDataProvider = ({ children }) => {
  const [CartVisible, setCartVisible] = useState(false);

  const [cartItem, setCartItem] = useState(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    return storedCartItems;
  });

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItem(storedCartItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItem));
  }, [cartItem]);

  const addItem = (item) => {
    const existingItem = cartItem.find((cartItem) => cartItem.id === item.id);

    if (!existingItem) {
      const newItem = { ...item, quantity: 1 };
      setCartItem([...cartItem, newItem]);
    } else {
      const updatedCartItems = cartItem.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      setCartItem(updatedCartItems);
    }
  };

  const removeItem = (item) => {
    const updatedCartItems = cartItem.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItem(updatedCartItems);
  };

  const decreaseItem = (item) => {
    const existingItem = cartItem.find((cartItem) => cartItem.id === item.id);
    if (existingItem && existingItem.quantity > 1) {
      const updatedCartItems = cartItem.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      });
      setCartItem(updatedCartItems);
    } else {
      removeItem(item);
    }
  };

  const totalQuantity = cartItem.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItem.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const value = {
    CartVisible,
    setCartVisible,
    cartItem,
    addItem,
    removeItem,
    decreaseItem,
    totalQuantity,
    totalPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
