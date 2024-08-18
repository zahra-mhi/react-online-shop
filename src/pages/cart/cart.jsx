import React, { useContext } from "react";
import { shopContext } from "../../context/shopContext";
import { Product } from "../shop/product";
import { PRODUCTS } from "../../data/products";

const Cart = () => {
  const { cart } = useContext(shopContext);
  return (
    <React.Fragment>
      <h1 className="my-4 p-2 bg-primary">cart</h1>
      <div className="row">
        {PRODUCTS.map((product) => {
          if (cart?.some((item) => item.id === product.id && item.count > 0)) {
            return <Product key={product.id} data={product} />;
          }
        })}
      </div>
    </React.Fragment>
  );
};

export default Cart;
