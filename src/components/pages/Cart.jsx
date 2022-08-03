import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { calcTotalPrice } from "../../totalPrice";
import CartItem from "../CartItem";
import Navigation_Button from "../Navigation_Button";
export default function Cart({ book }) {
  const navigate = useNavigate();
  // const handleClick = useCallback(() => {
  //   navigate("/cart");
  // });
  const items = useSelector((state) => state.cart.booksInCart);
  const totalPrice = calcTotalPrice(items);
  if (items.length < 1) {
    return (
      <div className="empty_basket_block">
        <h2 className="empty_basket">Корзина пуста</h2>
        <NavLink to="/" className="navlink">
          <div className="navigation_button_block">
            <Navigation_Button />
          </div>
        </NavLink>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="basket_block">
        <div className="basket_title">
          <span className="basket">Корзина</span>
          <i className="fa-solid fa-cart-shopping" href="">
            {" "}
          </i>
        </div>
        <div className="items">
          {items.map((book) => (
            <CartItem book={book} key={book.id} />
          ))}
        </div>
        <div className="order_block">
          <div className="total_info">
            <span className="total_count_num">Количество: {items.length} </span>
            <span className="total_price">Цена: {totalPrice}Р</span>
          </div>
          <div className="total_count_button">
            <button className="add_button--red">ЗАКАЗАТЬ</button>
          </div>
        </div>
        <NavLink to="/" className="navlink">
          <div className="navigation_button_block">
            <Navigation_Button />
          </div>
        </NavLink>
      </div>
    </div>
  );
}
