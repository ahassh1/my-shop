import React, { useState } from "react";

const SingleProduct = ({ product, handleAddToCart }) => {
  const [status, setStatus] = useState(false);
  const { title, description, image, currentBidPrice, timeLeft } = product;
  const handleSelect = () => {
    handleAddToCart(product);
    setStatus(true);
  };
  return (
    <div className="bg-sky-100 rounded-md border border-gray-300">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th></th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-16 w-20">
                      <img src={image} alt={title} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{description}</div>
                  </div>
                </div>
              </td>
              <td>{currentBidPrice}</td>
              <td>{timeLeft}</td>
              <th>
                <button
                  className="btn btn-ghost btn-xl"
                  onClick={handleSelect}
                  disabled={status}
                >
                  ❤
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SingleProduct;
