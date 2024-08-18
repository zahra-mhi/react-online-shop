import React from "react";
import { Product } from "./product";
import { PRODUCTS } from "../../data/products";

const Shop = () => {
  return (
    <React.Fragment>
      <h1 className="my-4 p-2 bg-primary">Shop</h1>
      <div className="row">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default Shop;
