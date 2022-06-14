import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CartPage from "./Pages/CartPage";
import DetailPage from "./Pages/DetailPage";
import HomePage from "./Pages/HomePage";
import Checkout from "./Pages/Checkout";

function App() {

  const currentItem = useSelector(state => state.shop.currentItem)

  return (
      <BrowserRouter className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={ !currentItem ? <Navigate to="/" /> : <DetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
