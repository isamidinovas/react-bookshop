import React from "react";

export default function Cart() {
  return (
    <div className="container">
      <div className="basket_block">
        <div className="basket_title">
          <span className="basket">Корзина</span>
          <i className="fa-solid fa-cart-shopping" href="#">
            {" "}
          </i>
        </div>
        <div className="items">
          <div className="item">
            <div className="books_items">
              <img
                className="img_book"
                src="https://cv2.litres.ru/pub/c/elektronnaya-kniga/cover_max1500/34355120-sara-dzhio-nazad-k-tebe.jpg"
                alt=""
              />
              <div className="info_block_title">
                <p className="info_block_title">Назад к тебе</p>
                <p className="info_block_title">Сара Джио</p>
              </div>
            </div>
            <div className="books_price">
              <span>129P</span>
            </div>
          </div>

          <div className="item">
            <div className="books_items">
              <img
                className="img_book"
                src="https://cv2.litres.ru/pub/c/elektronnaya-kniga/cover_max1500/34355120-sara-dzhio-nazad-k-tebe.jpg"
                alt=""
              />
              <div className="info_block_title">
                <p className="info_block_title">Назад к тебе</p>
                <p className="info_block_title">Сара Джио</p>
              </div>
            </div>
            <div className="books_price">
              <span>129P</span>
            </div>
          </div>

          <div className="item">
            <div className="books_items">
              <img
                className="img_book"
                src="https://cv2.litres.ru/pub/c/elektronnaya-kniga/cover_max1500/34355120-sara-dzhio-nazad-k-tebe.jpg"
                alt=""
              />
              <div className="info_block_title">
                <p className="info_block_title">Назад к тебе</p>
                <p className="info_block_title">Сара Джио</p>
              </div>
            </div>
            <div className="books_price">
              <span>129P</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
