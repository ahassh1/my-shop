import React from "react";

const Cart = ({ selectedProduct, price, handleDelete }) => {
  return (
    <div className="text-end">
      <h1 className="text-4xl p-5 font-bold text-gray-600">My Favorite Cart</h1>
      {selectedProduct.map((p) => (
        <div
          key={p.id}
          className="flex justify-around items-center m-2 border-gray-300 border-1 "
        >
          <img className="w-16" src={p.image} alt="" />
          <p>{p.title.slice(0, 25)}</p>
          <button
            onClick={() => handleDelete(p.id, p.price)}
            className="bg-red-500 p-1"
          >
            Delete
          </button>
        </div>
      ))}

      <div>
        <h2 className="text-2xl font-semibold text-gray-600">
          Total Price : ${price}
        </h2>
      </div>
    </div>
  );
};

export default Cart;
