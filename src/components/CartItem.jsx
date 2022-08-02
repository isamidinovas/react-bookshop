import React from "react";
import { useDispatch } from "react-redux";
import { removeBook } from "../redux/cart/reducer";
import { Link } from "react-router-dom";
export default function CartItem({ book }) {
  const dispatch = useDispatch();
  const deleteClick = () => {
    dispatch(removeBook(book.id));
  };
  return (
    <div className="item">
      <div className="item_inf">
        <div className="book_img">
          <img className="book_imgg" src={book.imageUrl} alt="" />
        </div>
        <div className="info_block_title">
          <p className="books_title">{book.title}</p>
          <p className="books_author">{book.author}</p>
        </div>
      </div>
      <div className="book_price">
        <span className="books_price">{book.price} </span>
      </div>
      <div className="delete">
        <i className="delete_icon" onClick={deleteClick}>
          &#10006;
        </i>
      </div>
    </div>
  );
}
