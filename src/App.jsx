import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./features/products/ProductDetails";
import CartDetails from "./features/products/CartDetails";
import CheckOut from "./features/products/CheckOut";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="Home" />} />
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="details" element={<ProductDetails />} />
          <Route path="cart" element={<CartDetails />} />
          <Route path="checkout" element={<CheckOut />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
