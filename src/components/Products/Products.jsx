import React, { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      {products.map((p) => (
        <SingleProduct product={p}></SingleProduct>
      ))}
    </div>
  );
};

export default Products;
