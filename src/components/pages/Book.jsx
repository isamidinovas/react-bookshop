import React from "react";
import Button from "../Button";
import { useSelector } from "react-redux";
export default function Book() {
  const books = useSelector((state) => state.books.currentBook);
  if (!books) return null; //Чтоб ниче не исчезало после обновл стр
  return (
    <section className="section">
      <div className="container">
        <div className="detals">
          <div className="img">
            <img className="book_page_img" src={books.imageUrl} alt="" />
          </div>
          <div className="info_block">
            <div className="info_block_title">
              <p className="bookss_title">{books.title}</p>
              <p className="bookss_author">{books.author}</p>
            </div>
            <span className="annotation">Аннотация</span>
            <p className="annotation_text">{books.annotation}</p>
            <Button books={books} />
          </div>
        </div>
      </div>
    </section>
  );
}
