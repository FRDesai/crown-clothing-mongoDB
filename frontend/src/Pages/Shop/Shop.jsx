import React, { useContext, useEffect, useState } from "react";

import { DataContext } from "../../Context/dataContext";
import ProductGrid from "../../Components/ProductGrid/ProductGrid";
const Shop = () => {
  const data = useContext(DataContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (data && data.length > 0) {
      setIsLoading(false);
    }
  }, [data]);

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
