import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { items } from "./data";
// import Product from "./product";

const Navbar = ({ setData,Cart }) => {
  

  return (
    <header className="sticky-top">
      <div className="nav-bar">
        <Link to={"/"} className="brand">
          E-Cart
        </Link>
        
        <Link to={"/cart"} className="cart">
          <button type="button" className="btn btn-primary position-relative">
            Cart
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {Cart.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </Link>
      </div>
     
    </header>
  );
};

export default Navbar;
