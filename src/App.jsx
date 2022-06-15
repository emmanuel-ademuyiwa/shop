import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CartPage from "./Pages/CartPage";
import DetailPage from "./Pages/DetailPage";
import HomePage from "./Pages/HomePage";
import Checkout from "./Pages/Checkout";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import {UserAuthContextProvider} from './context/useAuthContext'
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  const currentItem = useSelector(state => state.shop.currentItem)

  return (
    <UserAuthContextProvider>
      <BrowserRouter className="App">
        <Routes>
          <Route path="/auth/signin" element={<Signin />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={ !currentItem ? <Navigate to="/" /> : <DetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={
            <ProtectedRoute>
              <Checkout /> 
            </ProtectedRoute> } 
          />
        </Routes>
      </BrowserRouter>
    </UserAuthContextProvider>
  );
}

export default App;
