import React, { useContext, useEffect, useState } from "react";

import { DataContext } from "../../Context/dataContext";
import { CartContext } from "../../Context/cartContext";
import ProductGrid from "../../Components/ProductGrid/ProductGrid";
const Shop = () => {
  const data = useContext(DataContext);
  const {click} = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (data && data.length > 0) {
      setIsLoading(false);
    }
  }, [data]);
  console.log("click", click);
  if (isLoading) {
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
