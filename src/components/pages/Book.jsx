import React from "react";
import Button from "../Button";
export default function Book() {
  return (
    <section className="section">
      <div className="container">
        <div className="detals">
          <div className="img"></div>
          <div className="info_block">
            <div className="info_block_title">
              <p className="books_title"></p>
              <p className="books_author">Сара Джио</p>
            </div>
            <span className="annotation">Аннотация</span>
            <p className="annotation_text">
              Когда-то общественность потрясла история Шарлотты, которая попала
              в кораблекрушение во время медового месяца и вернулась домой лишь
              спустя два года. Она провела много времени в открытом море, а
              затем на необитаемом острове в компании нелюдимого мужчины по
              имени Грэй, благодаря которому смогла выжить.
            </p>
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
}
