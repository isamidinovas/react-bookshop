import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./components/css/style.css";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import Book from "./components/pages/Book";
import { store } from "./redux";
import "./App.css";
import Book_item from "./components/Book_item";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/:id" element={<Book />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
