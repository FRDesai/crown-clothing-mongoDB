import React, { useContext } from "react";
import "./ProductCard.styles.scss";
import Button from "../Button/Button";
import { CartContext } from "../../Context/cartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ items }) => {
  const { addItem } = useContext(CartContext);

  const handleAddItem = (item) => {
    addItem(item);
    toast("Item added to the cart!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 300,
      hideProgressBar: true,
    });
  };
  return (
    <div className="product-card-container">
      {items.map((item, index) => (
        <div key={index} className="product-card">
          <div className="image">
            <img src={item.imageUrl} alt={item.name} />
          </div>
          <div className="name-price-container">
            <div className="name">{item.name}</div>
            <div className="price">${item.price}</div>
          </div>
          <Button type="submit" onClick={() => handleAddItem(item)}>
            ADD TO CART
          </Button>
          <ToastContainer
            toastStyle={{ backgroundColor: "black", color: "white" }}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
