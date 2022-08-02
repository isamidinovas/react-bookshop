import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeBook, setBook } from "../redux/cart/reducer";

export default function Button({ book }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.booksInCart);
  const isBookInCart = items.some((item) => item.id === book.id);
  const handleClick = (e) => {
    e.stopPropagation();
    if (isBookInCart) {
      dispatch(removeBook(book.id));
    } else {
      dispatch(setBook(book));
    }
  };

  return (
    <div className="button">
      <button onClick={handleClick} className="add_button">
        {isBookInCart ? "Убрать из корзины" : "В корзину"}
      </button>
    </div>
  );
}
