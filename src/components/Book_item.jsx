import React from "react";
import Button from "./Button";
export default function Book_item() {
  return (
    <div className="book">
      <div className="book_img">
        <img
          className="books_img"
          src="https://cv2.litres.ru/pub/c/elektronnaya-kniga/cover_max1500/34355120-sara-dzhio-nazad-k-tebe.jpg"
          alt=""
        />
      </div>
      <div className="books_all_info">
        <div className="books_info">
          <p className="books_title">Назад к тебе</p>
          <p className="books_author">Сара Джио</p>
        </div>
        <div className="book_price">
          <span className="books_price">129p</span>
        </div>
      </div>
      <Button />
    </div>
  );
}
