import React from "react";
import { useDispatch } from "react-redux";
import { setBook } from "../redux/cart/reducer";

export default function Button({ book }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setBook(book));
  };

  return (
    <div className="button">
      <button onClick={handleClick} className="add_button">
        В корзину
      </button>
    </div>
  );
}
