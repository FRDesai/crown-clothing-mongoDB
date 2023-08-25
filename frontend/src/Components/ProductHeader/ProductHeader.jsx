import React from "react";
import "./ProductHeader.styles.scss";
import { useNavigate } from "react-router-dom";

const ProductHeader = ({ title, onClick }) => {
  const navigate = useNavigate();

  const handleRoute = (title) => {
    const dynamicroute = `${title}`;
    navigate(dynamicroute);
  };

  return (
    <div
      onClick={onClick ? () => handleRoute(title) : null}
      className="title-header"
    >
      <h1>{title}</h1>
    </div>
  );
};

export default ProductHeader;
