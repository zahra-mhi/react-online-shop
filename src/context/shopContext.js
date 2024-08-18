import React, { createContext, useState } from "react";

export const shopContext = createContext(null);

export const ShopProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    if (!cart.find((item) => item.id === id))
      setCart([...cart, { id: id, count: 1 }]);
    else
      setCart(
        cart.map((item) => {
          if (item.id === id) return { ...item, count: item.count + 1 };
          else return item;
        })
      );

    console.log(cart);
  };

  const removeFromCart = (id) => {
    if (cart.find((item) => item.id === id))
      setCart(
        cart.map((item) => {
          if (item.id === id) return { ...item, count: item.count === 0 ? 0 : item.count - 1 };
          else return item;
        })
      );

    console.log(cart);
  };

  return (
    <shopContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {props.children}
    </shopContext.Provider>
  );
};
