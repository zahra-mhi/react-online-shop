import React from "react";
import { Products } from "../../data/products";
const Shop = () => {
  return (
    <React.Fragment>
      <h1 className="my-4 p-2 bg-primary">Shop</h1>
      <div className="row">
        {Products.map((product) => (
          <div className="col-4">
            <div className="m-3">
              <img className="w-100" src={product.productImage} alt="" />
              <h3>{product.productName}</h3>
              <h6>price: {product.price}$</h6>
                <button className="btn btn-sm btn-primary">+</button>
                <span className="mx-1">0</span>
                <button className="btn btn-sm btn-primary">-</button>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Shop;
