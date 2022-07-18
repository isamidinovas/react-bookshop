import React from "react";
import { useDispatch } from "react-redux";
import { setBook } from "../redux/cart/reducer";

export default function Button({ book }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setBook(book));
  };

  return (
    <div className="button">
      <button onClick={handleClick} className="add_button">
        В корзину
      </button>
    </div>
  );
}

// import React from "react";
// import { useDispatch } from "react-redux";
// import { removeBook, setBook } from "../redux/cart/reducer";
// import { useSelector } from "react-redux";
// export default function Button({ book }) {
//   const dispatch = useDispatch();
//   const items = useSelector((state) => state.cart.booksInCart);
//   const isItemInCart = items.some((item) => item.id === book.id);
//   const handleClick = () => {
//     if (isItemInCart) {
//       dispatch(removeBook(book.id));
//     } else {
//       dispatch(setBook(book));
//     }
//   };

//   return (
//     <div className="button">
//       <button onClick={handleClick} className="add_button">
//         В корзину
//       </button>
//     </div>
//   );
// }
