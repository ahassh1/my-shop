import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Products from "../components/Products/Products";
import Cart from "../components/Cart/Cart";

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const [price, setPrice] = useState(0);
  const handleAddToCart = (product, productPrice) => {
    setPrice(price + productPrice);
    setSelectedProduct([...selectedProduct, product]);
  };

  return (
    <div>
      <Navbar selectedProduct={selectedProduct}></Navbar>
      <div className="md:p-24 md:bg-sky-200 bg-sky-100">
        <Banner></Banner>
      </div>
      <div className="flex justify-between">
        <div className="w-[67%] my-5">
          <Products handleAddToCart={handleAddToCart}></Products>
        </div>
        <div>
          <Cart price={price} selectedProduct={selectedProduct}></Cart>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
