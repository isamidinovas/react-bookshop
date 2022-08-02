import React from "react";
import Book_item from "../Book_item";
import { useNavigate } from "react-router";
import { useCallback } from "react";
import { BOOKS } from "../../BOOKS";
export default function Home() {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate("/book");
  }, [navigate]);
  return (
    <section className="section">
      <div className="container">
        <div className="books">
          {BOOKS.map((book) => (
            <Book_item book={book} key={book.id} onClick={handleClick} />
          ))}
        </div>
      </div>
    </section>
  );
}
