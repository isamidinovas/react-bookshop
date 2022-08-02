import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BOOKS } from "../../BOOKS";
import Navigation_Button from "../Navigation_Button";
export default function Book() {
  // const books = useSelector((state) => state.books.currentBook);
  // if (!books) return null; //Чтоб ниче не исчезало после обновл стр
  // console.log(books)
  const booksId = useParams();
  const booksDetail = BOOKS.filter((product) => product.id == booksId.id);
  const book = booksDetail[0];
  return (
    <section className="section">
      <div className="container">
        <div className="detals">
          <div className="img">
            <img className="book_page_img" src={book.imageUrl} alt="" />
          </div>
          <div className="info_block">
            <div className="info_block_title">
              <p className="bookss_title">{book.title}</p>
              <p className="bookss_author">{book.author}</p>
            </div>
            <span className="annotation">Аннотация</span>
            <p className="annotation_text">{book.annotation}</p>
            <Button book={book} />
          </div>
        </div>
        <NavLink to="/" className="navlink">
          <div className="navigation_button_block">
            <Navigation_Button />
          </div>
        </NavLink>
      </div>
    </section>
  );
}
