import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const Nav = () => {
  return (
    <React.Fragment>
      <nav class="navbar bg-light">
        <h1 class="navbar-brand">Navbar</h1>
        <ul class="nav mx-2">
          <li class="nav-item">
            <Link to='/' className="nav-link">shop</Link>
          </li>
          <li class="nav-item">
            <Link to='/cart' className="nav-link"><FontAwesomeIcon icon={faShoppingCart} /></Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};
