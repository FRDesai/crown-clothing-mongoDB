import React, { useContext } from "react";
import "./ProductCard.styles.scss";
import Button from "../Button/Button";
import { CartContext } from "../../Context/cartContext";

const ProductCard = ({ items }) => {
  const { cartItem, setCartItem } = useContext(CartContext);
  const addItem = (item) => {
    setCartItem({ ...cartItem, [item.id]: item });
  };
  console.log(cartItem);
  return (
    <div className="product-card-container">
      {items.map((item) => (
        <div className="product-card">
          <div className="image">
            <img src={item.imageUrl} alt={item.name} />
          </div>
          <div className="name-price-container">
            <div className="name">{item.name}</div>
            <div className="price">${item.price}</div>
          </div>
          <Button type="submit" onClick={() => addItem(item)}>
            ADD TO CART
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
