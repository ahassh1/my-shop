import React from "react";

const Cart = ({ selectedProduct }) => {
  return (
    <div className="text-end">
      <h1 className="text-4xl p-5">MY CART</h1>
      {selectedProduct.map((p) => (
        <div
          key={p.id}
          className="flex justify-around items-center m-2 border-gray-300 border-1 "
        >
          <img className="w-16" src={p.image} alt="" />
          <p>{p.title.slice(0, 25)}</p>
          <button className="bg-red-400 p-1">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;

// const Cart = ({ selectedProduct = [] }) => {
//   return (
//     <div>
//       {selectedProduct.map((p, index) => (
//         <div key={p?.id || index} className="flex justify-around items-center">
//           <img className="w-16" src={p?.image || ""} alt={p?.title || "No title"} />
//           <p>{p?.title ? p.title.slice(0, 7) : ""}</p>
//           <button>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// };
