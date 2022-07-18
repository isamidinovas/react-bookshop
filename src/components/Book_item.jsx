import React from "react";
import Button from "./Button";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setCurrentBook } from "../redux/book/reducer";
export default function Book_item({ book }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    dispatch(setCurrentBook(book));
    navigate("/book");
  }, [navigate]);
  return (
    <div className="book">
      <div className="book_img" onClick={handleClick}>
        <img className="books_img" src={book.imageUrl} />
      </div>
      <div className="books_all_info">
        <div className="info_block_title">
          <p className="books_title">{book.title}</p>
          <p className="books_author">{book.author}</p>
        </div>
        <div className="book_price">
          <span className="books_price">{book.price}P</span>
        </div>
      </div>
      <Button book={book} />
    </div>
  );
}
