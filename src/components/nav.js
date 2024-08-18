import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const Nav = () => {
  return (
    <React.Fragment>
      <nav className="navbar bg-light">
        <h1 className="navbar-brand">Navbar</h1>
        <ul className="nav mx-2">
          <li className="nav-item">
            <Link to='/' className="nav-link">shop</Link>
          </li>
          <li className="nav-item">
            <Link to='/cart' className="nav-link"><FontAwesomeIcon icon={faShoppingCart} /></Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};
