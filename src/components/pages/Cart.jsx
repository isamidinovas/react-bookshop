import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import CartItem from "../CartItem";
export default function Cart({ book }) {
  const navigate = useNavigate();
  // const handleClick = useCallback(() => {
  //   navigate("/cart");
  // });
  const items = useSelector((state) => state.cart.booksInCart);
  if (items.length < 1) {
    return <h2 className="empty_basket">Корзина пуста</h2>;
  }

  return (
    <div className="container">
      <div className="basket_block">
        <div className="basket_title">
          <span className="basket">Корзина</span>
          <i className="fa-solid fa-cart-shopping" href="">
            {" "}
          </i>
        </div>
        <div className="items">
          {items.map((book) => (
            <CartItem book={book} key={book.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
