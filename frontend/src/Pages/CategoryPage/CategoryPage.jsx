import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../Context/dataContext.js";
import ProductCard from "../../Components/ProductCard/ProductCard";
import ProductHeader from "../../Components/ProductHeader/ProductHeader";
import "./CategoryPage.scss";

const CategoryPage = () => {
  const { category } = useParams();
  const value = useContext(DataContext);
  const categoryData = value.find(
    (eachcategory) => eachcategory.title === category
  );
  return (
    <div className="category-page-container">
      {categoryData ? (
        <div>
          <ProductHeader title={categoryData.title} />
          <ProductCard items={categoryData.items} />
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default CategoryPage;
