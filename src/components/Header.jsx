import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
export default function Header() {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);
  return (
    // <header>
    <div className="header">
      <div className="container">
        <div className="header_elements">
          <div className="header_title">BookShop</div>
          <div className="header_cart_icon" onClick={handleClick}>
            <i className="fa-solid fa-cart-shopping" />
          </div>
        </div>
      </div>
    </div>
    //   </header>
  );
}
