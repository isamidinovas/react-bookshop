import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ItemsInCart } from "./ItemsInCart";

export default function Header() {
  const items = useSelector((state) => state.cart.booksInCart);
  // if (items.length > 0) {
  //   return (
  //     <div className="header">
  //       <div className="container">
  //         <div className="header_elements">
  //           <div className="header_title">BookShop</div>

  //           <NavLink to="/cart">
  //             <div className="header_cart_icon--true">
  //               <i className="fa-solid fa-cart-shopping" />
  //             </div>
  //           </NavLink>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <div className="header">
      <div className="container">
        <div className="header_elements">
          <div className="header_title">BookShop</div>

          <NavLink to="/cart">
            <div className="header_cart_icon">
              <ItemsInCart quantity={items.length} />
              <i className="fa-solid fa-cart-shopping" />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="game-buy">
  <span className="game-buy_price">{game.price}P</span>
  <Button type={isItemInCart ? "secondary" : "primary"} onClick={handleClick}>
    {isItemInCart ? "Убрать из корзины" : "В крозину"}
  </Button>
</div>; */
}
