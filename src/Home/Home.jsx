import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="md:p-24 md:bg-sky-200 bg-sky-100">
        <Banner></Banner>
      </div>
    </div>
  );
};

export default Home;
