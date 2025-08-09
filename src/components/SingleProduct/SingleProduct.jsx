import React from "react";

const SingleProduct = ({ product }) => {
  const { title, id, description, image, rating, currentBidPrice, timeLeft } =
    product;

  return (
    <div className="bg-sky-100 rounded-md border-1 border-gray-300 ">
      <div class="overflow-x-auto">
        <table class="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
                {/* </th>
 <th>Name</th>
 <th>Job</th>
 <th>Favorite Color</th>
 <th> */}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th></th>
              <td>
                <div class="flex items-center gap-3">
                  <div class="avatar">
                    <div class="mask mask-squircle h-17 w-18">
                      <img src={image} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">{description}</div>
                  </div>
                </div>
              </td>
              <td>{currentBidPrice}</td>
              <td>{timeLeft}</td>
              <th>
                <button class="btn btn-ghost btn-xl">❤</button>
              </th>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <th></th>
              {/* <th>Name</th>
 <th>Job</th>
 <th>Favorite Color</th> */}
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default SingleProduct;
