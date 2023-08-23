import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../Context/dataContext";
import ProductCard from "../../Components/ProductCard/ProductCard";
import ProductHeader from "../../Components/ProductHeader/ProductHeader";

const CategoryPage = () => {
  const { category } = useParams();
  const data = useContext(DataContext);
  
  const categoryData = data.find(
    (eachcategory) => eachcategory.title === category
  );
  const categoryItems = categoryData.items;
  return (
    <>
      <ProductHeader title={categoryData.title} />
      <ProductCard items={categoryItems} />
    </>
  );
};

export default CategoryPage;
