import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    // <header>
    <div className="header">
      <div className="container">
        <div className="header_elements">
          <div className="header_title">BookShop</div>
          <NavLink to="/cart">
            <div className="header_cart_icon">
              <i className="fa-solid fa-cart-shopping" />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
    //   </header>
  );
}
