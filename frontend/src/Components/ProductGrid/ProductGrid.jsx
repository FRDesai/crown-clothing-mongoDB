import React from "react";
import ProductHeader from "../ProductHeader/ProductHeader";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.styles.scss";

const ProductGrid = ({ productCategory }) => {
  const { title, items } = productCategory;
  const four_items = items.filter((_, index) => index < 4);
  return (
    <div className="product-grid">
      <ProductHeader title={title} onClick={true} />
      <ProductCard items={four_items} />
    </div>
  );
};

export default ProductGrid;
