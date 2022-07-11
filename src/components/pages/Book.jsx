import React from "react";
import Button from "../Button";
export default function Book() {
  return (
    <section className="section">
      <div className="container">
        <div className="detals">
          <div className="img">
            <img
              className="book_imgg"
              src="https://cv2.litres.ru/pub/c/elektronnaya-kniga/cover_max1500/34355120-sara-dzhio-nazad-k-tebe.jpg"
              alt=""
            />
          </div>
          <div className="info_block">
            <div className="info">
              <p className="info_block_title">Назад к тебе</p>
              <p className="info_block_title">Сара Джио</p>
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
