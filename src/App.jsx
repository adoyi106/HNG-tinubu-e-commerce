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

function App() {
  const queryClient = new QueryClient({
    defaultOption: {
      queries: {
        staleTime: 0,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
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
        </Routes>
      </BrowserRouter>
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
  );
}

export default App;
