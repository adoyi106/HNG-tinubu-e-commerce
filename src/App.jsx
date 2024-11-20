import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Home from "./pages/Home";
import Products from "./pages/Products";

import CartDetails from "./features/cart/CartDetails";
import CheckOut from "./features/checkout/CheckOut";
import AppLayout from "./ui/AppLayout";

import Product from "./pages/Product";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/CartContext";
import Login from "./pages/Login";

import Signup from "./pages/Signup";
import Auth0ProviderWithNavigate from "./services/Auth0ProviderWithNavigate";
import VerifyEmail from "./ui/verifyEmail";
import { SignupProvider } from "./context/SignupContext";
// import Auth0ProviderWithHistory from "./services/auth0Provider";

function App() {
  const queryClient = new QueryClient({
    defaultOption: {
      queries: {
        staleTime: 0,
      },
    },
  });
  return (
    <SignupProvider>
      <CartProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Auth0ProviderWithNavigate>
            <BrowserRouter>
              <Routes>
                <Route element={<AppLayout />}>
                  {/* <Route index element={<Navigate replace to="/" />} /> */}
                  <Route index path="/" element={<Home />} />
                  <Route path="products" element={<Products />} />
                  <Route path="products/:productId" element={<Product />} />
                  <Route path="cart" element={<CartDetails />} />
                  <Route path="checkout" element={<CheckOut />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="verifyemail" element={<VerifyEmail />} />
              </Routes>
            </BrowserRouter>
          </Auth0ProviderWithNavigate>
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ marging: "8px" }}
            toasteOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: { fontSize: "45px", maxWidth: "500px" },
              padding: "16px 24px",
              backgroundColor: "#fff",
              color: "#374151",
            }}
          />
        </QueryClientProvider>
      </CartProvider>
    </SignupProvider>
  );
}

export default App;
