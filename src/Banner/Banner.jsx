import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.freepik.com/free-vector/people-buying-christmas-gifts_23-2148339046.jpg?semt=ais_hybrid&w=740&q=80"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Hello and Welcome!</h1>
            <p className="py-6">
              Our collection has something for everyone. Don’t miss out on
              exclusive deals and limited-time offers designed just for you.
              Shopping has never been this easy or exciting. Shop now and bring
              your favorites home today!
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
