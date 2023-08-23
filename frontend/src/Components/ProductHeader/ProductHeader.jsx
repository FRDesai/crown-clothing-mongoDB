import React from "react";
import "./ProductHeader.styles.scss";
import { useNavigate } from "react-router-dom";

const ProductHeader = ({ title }) => {
  const navigate = useNavigate();
  const handleRoute = (title) => {
    const dynamicroute = `${title}`;
    navigate(dynamicroute);
  };

  return (
    <div className="title-header">
      <h1 onClick={() => handleRoute(title)}>{title}</h1>
    </div>
  );
};

export default ProductHeader;
