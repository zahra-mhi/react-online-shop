import { useContext } from "react";
import { shopContext } from "../../context/shopContext";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cart, addToCart, removeFromCart } = useContext(shopContext);
  const isInCart = cart?.some((item) => item.id === id)

  return (
    <div className="col-4">
      <div className="m-3">
        <img className="w-100" src={productImage} />
        <h3>{productName}</h3>
        <h6>price: {price}$</h6>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => addToCart(id)}
        >
          +
        </button>
        <span className="mx-1">
          {cart.find((item) => item.id === id)?.count}
        </span>
        { isInCart  &&    <button
          className="btn btn-sm btn-primary"
          onClick={() => removeFromCart(id)}
        >
          -
        </button>}  
     
      </div>
    </div>
  );
};
