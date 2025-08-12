import React, { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";

const Products = ({ handleAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      {products.map((p) => (
        <SingleProduct
          key={p.id}
          product={p}
          handleAddToCart={handleAddToCart}
        ></SingleProduct>
      ))}
    </div>
  );
};

export default Products;
