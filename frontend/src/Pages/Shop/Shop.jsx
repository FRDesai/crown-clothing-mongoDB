import React, { useContext } from "react";

import { DataContext } from "../../Context/dataContext";
import ProductGrid from "../../Components/ProductGrid/ProductGrid";
const Shop = () => {
  const data = useContext(DataContext);
  console.log("data in shop", data);
  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  } else
    return (
      <div>
        {data.map((productCategory) => (
          <ProductGrid productCategory={productCategory} />
        ))}
      </div>
    );
};

export default Shop;
