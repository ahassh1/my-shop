import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Products from "../components/Products/Products";
import Cart from "../components/Cart/Cart";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:p-24 md:bg-sky-200 bg-sky-100">
        <Banner></Banner>
      </div>
      <div className="flex justify-around w-screen">
        <div>
          <Products></Products>
        </div>
        <div>
          <Cart></Cart>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
