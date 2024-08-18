import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { shopContext } from "../context/shopContext";
import './nav.css';

export const Nav = () => {
  const { cart } = useContext(shopContext);

  const cartCount = cart.reduce((prev, current) => {
    return prev + current.count;
  }, 0);

  return (
    <React.Fragment>
      <nav className="navbar bg-light">
        <h1 className="navbar-brand">Navbar</h1>
        <ul className="nav mx-2">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              shop
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="cart-items-count">{cartCount}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};
