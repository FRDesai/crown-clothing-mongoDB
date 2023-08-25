import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../Context/dataContext";
import ProductCard from "../../Components/ProductCard/ProductCard";
import ProductHeader from "../../Components/ProductHeader/ProductHeader";
import "./CategoryPage.scss";

const CategoryPage = () => {
  const { category } = useParams();
  const data = useContext(DataContext);

  const categoryData = data.find(
    (eachcategory) => eachcategory.title === category
  );
  const categoryItems = categoryData.items;
  return (
    <div className="category-page-container">
      <ProductHeader title={categoryData.title} />
      <ProductCard items={categoryItems} />
    </div>
  );
};

export default CategoryPage;
